function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phone  = event.target.phonenumber.value;

    const obj = {
        name,
        email,
        phone
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showUsersOnScreen(obj)
}

function showUsersOnScreen(obj){
    const pele = document.getElementById('listOfUsers')
    const cele = document.createElement('li')
    cele.textContent = `${obj.name} - ${obj.email} - ${obj.phone}`

    const button = document.createElement('button')
    const text = document.createTextNode('delete')

    button.appendChild(text)

    button.onclick = function delOnClick(){
        localStorage.removeItem(obj.email)
        pele.removeChild(cele)
    }

    //adding the edit button
    const button2 = document.createElement('button')
    const text2 = document.createTextNode('edit')

    button2.appendChild(text2)

    button2.onclick = function editTheEntries(){
        localStorage.removeItem(obj.email) // this will remove the current wrong entry from local storage
        pele.removeChild(cele) //this will remove the current wrong entry from the list below
        //below will make sure that the wrong entry again goes to the input boxes where we can edit them 
        document.getElementById('usernameInputTag').value = obj.name
        document.getElementById('emailIdInputTag').value = obj.email
        document.getElementById('phonenumberInputTag').value = obj.phone

    }

    cele.appendChild(button)
    cele.appendChild(button2)
    pele.appendChild(cele)
}