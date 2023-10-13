//SELECTORS - task 4 uptil 27th min https://www.youtube.com/watch?v=0ik6X4DJKCc//

//get element by id//
// let a = document.getElementById('header-title');
// console.log(a);
// console.log(a.textContent);
// //textcontent- also consider style if present //
// a.textContent = 'hello';

// //innertext// doesnt take style in consideration
// a.innerText = 'hurray';

// //innerhtml// it didnt remove the h1 tag instead it put h3 tag inside the h1 tag
// a.innerHTML = '<h3>sia</h3>';


//changing style.borderBottom changes or put the underline the element present in the header-title id .
// let headertitle = document.getElementById('header-title');
// console.log(headertitle);
// headertitle.style.borderBottom = 'solid 3px #000';

// //select by classname//gives htm- collection of the class
// let new_ele = document.getElementsByClassName('list-group-item');
// console.log(new_ele);

// //accessing the elements by index no 
// console.log(new_ele[2]);

// //changing the text content of ele[1] 
// new_ele[1].textContent = "python";

// //changing font to bold of the 1st item of list-group-item class
// new_ele[1].style.fontWeight = 'bold';

// //changing the background color of the first item of list-group-item class
// new_ele[1].style.backgroundColor = 'yellow';


// //change color of all the elements of the list-group-item class into drak grey
// //code which gives error - new_ele.style.backgroundColor = '#f4f4f4';
// //in order to change the background colour of all the elements of this class we need to loop through the html collection of list-group-item class
// for(let i=0;i< new_ele.length;i++){
//     new_ele[i].style.backgroundColor = "#a4a4a4";
// }