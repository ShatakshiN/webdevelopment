function saveToLocalStorage(event){
    event.preventDefault();
    const amount = event.target.amount.value;
    const description= event.target.description.value;
    const category = event.target.category.value;

    const obj={
        amount,
        description,
        category
        
    }

    localStorage.setItem(obj.amount,JSON.stringify(obj));
    showUsersOnScreen(obj);
}

function showUsersOnScreen(obj){
    const parentElem = document.getElementById('listOfUsers');
    const childElem = document.createElement('li');
    childElem.textContent = `${obj.amount} - ${obj.description} - ${obj.category}`

    

    const delButton = document.createElement('button');
    const delText = document.createTextNode('Delete');
    delButton.appendChild(delText);
    childElem.appendChild(delButton)

    delButton.onclick = () =>{
        localStorage.removeItem(obj.amount);
        parentElem.removeChild(childElem);

    }

    const editButton = document.createElement('button');
    const editText = document.createTextNode('Edit');
    editButton.appendChild(editText);
    childElem.appendChild(editButton);

    editButton.onclick = () =>{
        localStorage.removeItem(obj.amount);
        parentElem.removeChild(childElem);
        document.getElementById('amountInputTag').value = obj.amount;
        document.getElementById('descriptionInputTag').value = obj.description;
        document.getElementById('categoryTag').value = obj.category; 
    }

    parentElem.appendChild(childElem)

    


}