var newInput = document.createElement('input');

// Adding className to newInput
newInput.className = "form-control mr-2";

// Adding id to newInput
newInput.id = "item";

// Adding type to newInput
newInput.type = 'text';

// Find the parent element where you want to insert the new input
var form = document.getElementById('addForm');
var linebelow = document.querySelector('#addForm input[type="submit"]');

// Insert the new input element before the last child of the form
form.insertBefore(newInput, linebelow);



// getting the form 
var form = document.getElementById('addForm');

var form2 = document.getElementById('addform')

//putting ul id item in a vbariable
var itemlist = document.getElementById('items');


//form submit event
form.addEventListener('submit', addItem);

//delete event 
itemlist.addEventListener('click', removeItem);

//add item function 
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    var newItemm= newInput.value; //to get the input valuye of the newInput
    
    //creat new element of li
    var li = document.createElement('li');

    //add class name to li 
    li.className = 'list-group-item';

    //add textnode with input value
    li.appendChild(document.createTextNode(newItem))
    li.appendChild(document.createTextNode(newItemm));

    //create button element 
    var delbutton = document.createElement('button');

    //add classname to the delbutton var
    delbutton.className = "btn btn-danger btn-sm float-right delete";

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// use of filter//
var filteruse = document.getElementById('filter');

//filter event
filteruse.addEventListener('keyup',filterItems);

// function for filter
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    
    //get list item
    var items = document.getElementsByTagName('li');

    //convert the list item to array
    Array.from(items).forEach(function(item, newInput) {
        var itemName = item.firstChild.textContent; // first child is item1, item2 ,item3 etc 
        var description = item.childNodes[1].textContent; //since the newInput which we have added is the 2nd child of the ul element 
        if (itemName.toLowerCase().indexOf(text) !=-1 || description.toLocaleLowerCase().indexOf(text) !=-1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
        
    });
}

