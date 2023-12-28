let totalAmountValue = 0; // Global variable to store the total amount

function saveToCloudStorageForHotel(event) {
    event.preventDefault();
    const room = parseFloat(event.target.noOfRooms.value); // Parse amount as a float

    // Update the total amount
    totalAmountValue += room;


    // Create a new heading element to display the total amount
    updateTotalAmountOnScreen();

    const name = event.target.customerName.value;
    const contact = event.target.contactNum.value;

    const obj = {
        room,
        name,
        contact
    };

    axios.post('https://crudcrud.com/api/2a042c18109346ba871f4e7e1d285ff8/data', obj)
        .then((response) => {
            showUsersOnScreen(response.data);
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
}

function updateTotalAmountOnScreen() {
    let totalRoomElem = document.getElementById('totalRooms');
    if (!totalRoomElem){
        totalRoomElem = document.createElement('h2');
        totalRoomElem.id = 'totalRooms';
        totalRoomElem.style.backgroundColor = 'white';
        totalRoomElem.className = 'text-center me-5 container col-4 opacity-75' ;
        document.body.appendChild(totalRoomElem);
    } 
    // Update the content of the total amount heading
    totalRoomElem.textContent = `Total Rooms Occupied: ${totalAmountValue}`;

}

function deleteFromCloudStorage(id, childElem) {
    axios.delete(`https://crudcrud.com/api/2a042c18109346ba871f4e7e1d285ff8/data/${id}`)
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
    childElem.appendChild(delButton);

    delButton.onclick = () => {
        // Assuming each entry has an 'amount' property representing the amount entered
    const roomToDelete = obj.room;

    // Call the delete function passing the user's id and the list item element
    deleteFromCloudStorage(obj._id, childElem);

    // Subtract the amount of the deleted entry from the total amount
    totalAmountValue -= roomToDelete;

    // Update the total amount on the screen
    updateTotalAmountOnScreen();

        
    };

    const editButton = document.createElement('button');
    const editText = document.createTextNode('Edit');
    editButton.appendChild(editText);
    childElem.appendChild(editButton);

    editButton.onclick = () =>{

        const toDelete = obj.room;


        deleteFromCloudStorage(obj._id, childElem);

        totalAmountValue -= toDelete;

        updateTotalAmountOnScreen()

        document.getElementById('fullNameTag').value = obj.name;
        document.getElementById('phoneNumTag').value = obj.contact;
        document.getElementById('roomTag').value = obj.room;
         
    }

    parentElem.appendChild(childElem);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/2a042c18109346ba871f4e7e1d285ff8/data")
        .then((response) => {
            console.log(response);

            for (let i = 0; i < response.data.length; i++) {
                showUsersOnScreen(response.data[i]);
                // Update the total amount for existing data
                totalAmountValue += response.data[i].room;
            }

            // Display the initial total amount
            updateTotalAmountOnScreen();
        })
        .catch((err) => {
            console.log(err);
        });
});

