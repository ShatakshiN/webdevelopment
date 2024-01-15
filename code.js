/* // array in js and its methods

const fruits =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];4

let newFruits = fruits.map(function(index){
    if (index == " "){
        index = "emptyString"
    }
})

console.log(newFruits); */


//async await 
/* console.log('a');
console.log('b');
setTimeout(() => console.log('c'), 3000)
setTimeout(() => console.log('d'), 0)
console.log('e'); */

//o/p = abcde


/* 
const ans = async () =>{
    const printa  = new Promise((resolve,reject)=>{
        resolve('a');
    })

    const printb = new Promise((resolve, reject)=>{
        resolve('b');
    })

    const printc = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('c')
        },3000);
    })

    const printd = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('d')
        },0);
    })

    const printe = new Promise((resolve, reject)=>{
        resolve('e');
    })

    const print1 = await printa;
    console.log(print1)
    const print2 = await printb;
    console.log(print2);
    const print3 = await printc;
    console.log(print3);
    const print4 = await printd;
    console.log(print4);
    const print5 = await printe;
    console.log(print5);
}

console.log(ans()); */


const hobbies = ['sports', 'cooking'];

const neArr = [...hobbies];
neArr.push('singing')
console.log(neArr)
