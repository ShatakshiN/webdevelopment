let totalRooms= 0; // Global variable to store the total rooms

function saveToCloudStorageForHotel(event) {
    event.preventDefault();
    const room = parseInt(event.target.noOfRooms.value); // Parse amount as Int
    const name = event.target.customerName.value;
    const contact = event.target.contactNum.value;

    // Update the total rooms
    totalRooms += room;

    // Create a new heading element to display the total amount
    updateTotalRoomOnScreen();

    const obj = {
        room,
        name,
        contact
    };

    axios.post('https://crudcrud.com/api/3e7d5b0aadc24adbbc4a034fc103deed/data', obj)
        .then((response) => {
            showUsersOnScreen(response.data); // shows the entries on the screen data is present response that we are getting back 
            console.log(response); // just for checking purposes (in the inspect console)
        })
        .catch((err) => {
            console.log(err);
        });
}

function updateTotalRoomOnScreen() {
    let totalRoomElem = document.getElementById('totalRooms');
    if (!totalRoomElem){ 
        totalRoomElem = document.createElement('h4');
        totalRoomElem.id = 'totalRooms';
        totalRoomElem.style.backgroundColor = 'white';
        totalRoomElem.className = 'text-center me-5 container col-4 opacity-75' ;
        document.body.appendChild(totalRoomElem);
    } 
    // Update the content of the total room heading
    totalRoomElem.textContent = `Total Rooms Occupied: ${totalRooms}`;

}

function deleteFromCloudStorage(id, childElem) {
    axios.delete(`https://crudcrud.com/api/3e7d5b0aadc24adbbc4a034fc103deed/data/${id}`)
        .then(() => {
            const parentElem = document.getElementById('listOfUsers');
            parentElem.removeChild(childElem);
            
        })
        .catch((err) => {
            console.log(err);
        });
}

function showUsersOnScreen(obj) {
    const parentElem = document.getElementById('listOfUsers');
    const childElem = document.createElement('li');
    childElem.textContent = `${obj.name} - ${obj.contact} - ${obj.room}`;

    const delButton = document.createElement('button');
    const delText = document.createTextNode('Delete');
    delButton.appendChild(delText);
    childElem.appendChild(delButton); // so that each entry has a delete button

    delButton.onclick = () => {
        //  each entry has  'room' property representing the no of rooms entered
    const roomToDelete = obj.room;

    // Call the delete function passing the user's id and the list item element
    deleteFromCloudStorage(obj._id, childElem);

    // Subtract the amount of the deleted entry from the total amount
    totalRooms -= roomToDelete;

    // Update the total amount on the screen
    updateTotalRoomOnScreen();

        
    };

    const editButton = document.createElement('button');
    const editText = document.createTextNode('Edit');
    editButton.appendChild(editText);
    childElem.appendChild(editButton);

    editButton.onclick = () =>{

        const toDelete = obj.room;


        deleteFromCloudStorage(obj._id, childElem);

        totalRooms -= toDelete;

        updateTotalRoomOnScreen()

        //populating the input fields of html elements
        document.getElementById('fullNameTag').value = obj.name;
        document.getElementById('phoneNumTag').value = obj.contact;
        document.getElementById('roomTag').value = obj.room;
         
    }

    parentElem.appendChild(childElem);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/3e7d5b0aadc24adbbc4a034fc103deed/data")
        .then((response) => {
            console.log(response);

            for (let i = 0; i < response.data.length; i++) {
                showUsersOnScreen(response.data[i]);
                // Update the total room for existing data
                totalRooms += response.data[i].room;
            }

            // Display the initial total room
            updateTotalRoomOnScreen();
        })
        .catch((err) => {
            console.log(err);
        });
});

