function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;
    const obj={
        name,
        email,
        phonenumber
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showUsersOnScreen(obj)
}

function showUsersOnScreen(obj){
    const parentElem = document.getElementById('listOfUsers')
    const childElem = document.createElement('li')
    childElem.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber
    parentElem.appendChild(childElem)
}