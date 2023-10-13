// //get by tag name selector
// let i = document.getElementsByTagName('li');
// console.log(i);

// //can print each element by their index
// console.log(i[4])

// //also does the same things mentioned in the getbyclassname selector. just copy past all the code and try to run it , same operations will exe.

// //QUERY SELECTOR ----IMP
// //can select only one item with this  , if you need multiple ele or tags use queryselectorall
// //this ony gets the first appearence of the given tag 
// //it canget anything, tags, classes, objects etc
// let v = document.querySelector('#main-header');
// console.log(v);
// //we can also manipulate the style 
// v.style.borderBottom = 'solid 3px #000';

// //changing the msg inside the submit button
// let input = document.querySelector('input');
// console.log(input);
// input.value = 'hello world';


// //changing the submit button msg 
// let sub = document.querySelector('input[type="submit"]');
// sub.value = 'send';

// //changing the color of text of the list items, below code only changes the font colour of the item 1
// let listt = document.querySelector('.list-group-item');
// listt.style.color = 'blue';
// listt.style.fontWeight = 'bold';

// //to change the colour of the last ie item 4 use last-child
// let llistt = document.querySelector('.list-group-item:last-child');
// llistt.style.color = 'purple';
// llistt.style.fontWeight = 'bold';

// //for changing colour of the nth line(except 1st and last) we can use nth child
// let nlistt = document.querySelector('.list-group-item:nth-child(2)');
// nlistt.style.color = 'green';
// nlistt.style.fontWeight = 'bold';


// //QUERY SELECTOR ALL
// // works similar to the selectbytagname or classname
// //here also in the arg we can put anything
// // this gives us a nodelist which is similar to the collection except we can run aa methods on nodelist
// let q = document.querySelectorAll('.title');
// console.log(q);
// q[0].textContent = 'not today';

// //changing the color of odd li items to green
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)')
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
//     even[i].style.backgroundColor = 'pink';
// }