let totalAmountValue = 0; // Global variable to store the total amount

function saveToCloudStorage(event) {
    event.preventDefault();
    const amount = parseFloat(event.target.amount.value); // Parse amount as a float

    // Update the total amount
    totalAmountValue += amount;


    // Create a new heading element to display the total amount
    updateTotalAmountOnScreen();

    const product = event.target.prod.value;

    const obj = {
        amount,
        product
    };

    axios.post('https://crudcrud.com/api/bdba2f90091b411fb556e61560e91acc/data', obj)
        .then((response) => {
            showUsersOnScreen(response.data);
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
}

function updateTotalAmountOnScreen() {
    let totalAmountElem = document.getElementById('totalAmount');
    if (!totalAmountElem){
        totalAmountElem = document.createElement('h2');
    totalAmountElem.id = 'totalAmount';
    totalAmountElem.style.backgroundColor = 'white';
    totalAmountElem.className = 'text-center container col-4' 
    document.body.appendChild(totalAmountElem);
    } 
    // Update the content of the total amount heading
    totalAmountElem.textContent = `Total Amount: ${totalAmountValue}`;

}

function deleteFromCloudStorage(id, childElem) {
    axios.delete(`https://crudcrud.com/api/bdba2f90091b411fb556e61560e91acc/data/${id}`)
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
    childElem.textContent = `${obj.amount} - ${obj.product}`;

    const delButton = document.createElement('button');
    const delText = document.createTextNode('Delete');
    delButton.appendChild(delText);
    childElem.appendChild(delButton);

    delButton.onclick = () => {
        // Assuming each entry has an 'amount' property representing the amount entered
    const amountToDelete = obj.amount;

    // Call the delete function passing the user's id and the list item element
    deleteFromCloudStorage(obj._id, childElem);

    // Subtract the amount of the deleted entry from the total amount
    totalAmountValue -= amountToDelete;

    // Update the total amount on the screen
    updateTotalAmountOnScreen();

        
    };

    const editButton = document.createElement('button');
    const editText = document.createTextNode('Edit');
    editButton.appendChild(editText);
    childElem.appendChild(editButton);

    editButton.onclick = () =>{

        const toDelete = obj.amount;


        deleteFromCloudStorage(obj._id, childElem);

        totalAmountValue -= toDelete;

        updateTotalAmountOnScreen()

        document.getElementById('amountTag').value = obj.amount;
        document.getElementById('product').value = obj.product;
         
    }

    parentElem.appendChild(childElem);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/bdba2f90091b411fb556e61560e91acc/data")
        .then((response) => {
            console.log(response);

            for (let i = 0; i < response.data.length; i++) {
                showUsersOnScreen(response.data[i]);
                // Update the total amount for existing data
                totalAmountValue += response.data[i].amount;
            }

            // Display the initial total amount
            updateTotalAmountOnScreen();
        })
        .catch((err) => {
            console.log(err);
        });
});

