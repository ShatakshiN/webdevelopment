//task 3 js code
 //DOM manipulation codecheat- 2nd assignment , 3rd task uptil 17th min https://www.youtube.com/watch?v=0ik6X4DJKCc //

//examin the document object//
console.dir(document);

//how to access the domain name //
console.log(document.domain);

//how to access url//
console.log(document.URL);

//how to access title//
console.log(document.title);

//how to change the  title name //
// document.title = 123 just for eg

//look for docktype//
console.log(document.doctype);

//how to access head//
console.log(document.head);

//how to access body//
console.log(document.body);

//this code acces everything present in the doc in a form of html-collections//
console.log(document.all);
//o/p = [html,head,meta,meta,meta,...........,]

//we can also access these tags and element by their index in html-collections above//
console.log(document.all[1]);
//o/p = head and everthing inside head

//note - dont access elements by the all[i] as if we later add or remove any tag or element then it will give us the correct tag that we wanted to have .
// these are not array to make them array we need to convert them to array. although you can still access any element by index no.


//access all the forms in the doc//
console.log(document.forms);

//access all the links present//
console.log(document.links);

//access images on the doc//
console.log(document.images);

               