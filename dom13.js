function saveInLocalStorage(event){
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
    const button  = document.createElement('button')
    const text = document.createTextNode('Delete')
    button.onclick = () =>{ // The onclick event occurs when the user clicks on an HTML element. ie when we click the delete button 
        //the entry on which we click delete will vanish from local storage and below the form .
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
    }
    button.appendChild(text)
    childElem.appendChild(button)
    parentElem.appendChild(childElem)
}