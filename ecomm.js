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

    axios.post('https://crudcrud.com/api/3d27df8efd87435fa2d792dd77ec588e/data', obj)
        .then((response) => {
            showUsersOnScreen(response.data);
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
}

function updateTotalAmountOnScreen() {
    // Get or create the total amount heading element
    let totalAmountElem = document.getElementById('totalAmount');
    if (!totalAmountElem) {
        totalAmountElem = document.createElement('h2');
        totalAmountElem.id = 'totalAmount';
        document.body.appendChild(totalAmountElem);
    }

    // Update the content of the total amount heading
    totalAmountElem.textContent = `Total Amount: ${totalAmountValue}`;
}

function deleteFromCloudStorage(id, childElem) {
    axios.delete(`https://crudcrud.com/api/3d27df8efd87435fa2d792dd77ec588e/data/${id}`)
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
        // Call the delete function passing the user's id and the list item element
        deleteFromCloudStorage(obj._id, childElem);
    };

    parentElem.appendChild(childElem);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/3d27df8efd87435fa2d792dd77ec588e/data")
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

