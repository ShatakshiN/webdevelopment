// getting the form 
var form = document.getElementById('addForm');

//putting ul id item in a vbariable
var itemlist = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);

//delete event 
form.addEventListener('click', removeItem);

//add item function 
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    
    //creat new element of li
    var li = document.createElement('li');

    //add class name to li 
    li.className = 'list-group-item';

    //add textnode with input value
    li.appendChild(document.createTextNode(newItem))

    //create button element 
    var delbutton = document.createElement('button');

    //add classname to the delbutton var
    delbutton.className = 'btn btn-danger btn-sm float-right delete';

    //append text node in the new button 
    delbutton.appendChild(document.createTextNode('X'));

    //append delbutton to li 
    li.appendChild(delbutton);

    //append li to list
    itemlist.appendChild(li);
    
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }

}

