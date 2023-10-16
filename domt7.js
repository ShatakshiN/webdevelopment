//TRAVERSE THE DOM//

//diff btw a node and an element :-
// node is anything within a an html doc including comments, tags , text etc eg - <title>, <!--comment--> 'text' etc
//elements are only html elements  eg - <html> <div> <a> etc


                                            //PARENT//

// PARENTNODE --- it is the node property returns the parent node of an element or node.The parentNode property is read-only but stle is not read only we can use parentnode along with style to manipulate the style .
// here the item (line 24 in the html file) is the child of the <div id="main" class="card card-body"> (line17 in html doc)
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = 'pink'; // changes the bg color of the box around add items.
//if you will keep chaining the parent node , you will keep finding the parentnode of the parent node. in the below eg - parent node of line 17 is line 16 (<div class="container">)
console.log(itemList.parentNode.parentNode);

//PARENTELEMENT
//can be used interchangably with parent element 
var element = document.querySelector('#items');
console.log(element.parentElement); // same as parentNode -- o/p = main
//element.parentElement.style.backgroundColor = 'grey'; // changes the bg color of the box around add items.
console.log(element.parentElement.parentElement); // returns same as parentNode --- o/p = container


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                            //CHILD AND CHILDREN//

//CHILDNODES -- childNodes returns child nodes (element nodes, text nodes, and comment nodes).// this returns a nodelist
let child  = document.querySelector('#items');
console.log(child.childNodes); // here the text it is returning on 0,2,4,6,8th line is whitespaces since we in the html doc we started every<li> in a different line


//CHILDREN -- returns child node but nor text nodes niether comment nodes. also this returns a html collection 
console.log(child.children);

//we can also access a particular child by accessing its index no 
console.log(child.children[1]);

// can also change the things using above
//child.children[1].style.backgroundColor = 'yellow';


//FIRSTCHILD - firstChild returns the first child node: An element node, a text node, or a comment node.Whitespace between elements are also text nodes.
console.log(child.firstChild); // returns a text since we saw in the childNode that the  first node object was text . 


//FIRSTELEMENTCHILD -- use this instead of first child since it doesnt return text or comment nodes
console.log(child.firstElementChild); // returns <li class="list-group-item">Item 1</li>  (the first ie the item 1 row)

child.firstElementChild.textContent = 'hello world'; // changes the msg of the first item1. 


//LASTCHILD- LastChild returns the last child node: An element node, a text node, or a comment node.Whitespace between elements are also text nodes.
console.log(child.lastChild); // returns a text since we saw in the childNode that the  first node object was text . 


//LASTELEMENTCHILD -- use this instead of last child since it doesnt return text or comment nodes
console.log(child.lastElementChild); // returns <li class="list-group-item">Item 1</li>  (the first ie the item 1 row)

//child.lastElementChild.textContent = 'hello world'; // changes the msg of the first item1.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                                     //SIBLINGS//

var sibling = document.querySelector('#items');                                                     
//NEXTSIBLING--  property returns the next node on the same tree level. returns along with text ,comment node.
console.log(sibling.nextSibling); // returns text


//NEXT ELEMENT SIBLING--returns the next sibling element (ignores text and comments).
console.log(sibling.nextElementSibling); //returns span element


//PREVIOUSSIBLING--returns the previous sibling node: An element node, a text node, or a comment node.
console.log(sibling.previousSibling);

//PREVIOUS ELEMENT  SIBLING -- returns above without textnode or comment node
console.log(sibling.previousElementSibling);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                                // CREATING NEW ELEMENTS//
// create div using createelement   
var newdiv = document.createElement('div');

//add a class to this new div
newdiv.className = 'hello';

//add id to this new div
newdiv.id = 'hello1';

//add attribute - one parameter is the actual attribute that we want to add  here - title , 2nd parameter - is what you want to add ie hello div
newdiv.setAttribute('title', 'hello div');

console.log(newdiv);

                                     //INSERT CONTENT INSIDE THE NEW CREATED NEWDIV//

// crate a text node
var newdivtext = document.createTextNode('hello');

// to append this new text node in div
newdiv.appendChild(newdivtext);

//till now the newdiv is in javascript now we want to insert it inside the dom 
var insertnewdiv = document.querySelector('header .container'); // since we want to inset it right above 13th line inside the container class
var headiing1 = document.querySelector('header h1');

//use insertbefore to insert new div inside the class . 
// insert before takes 2 parameter - 1. what we are inserting , 2. what we are inserting before 
insertnewdiv.insertBefore(newdiv, headiing1);

newdiv.style.fontSize = '30px';



