//case 1 when the couple forgets the tickets and the wife goes back to bring tickets

console.log('person1 : shows ticket');
console.log('person2 :shows ticket');

const promiseWifeBringsTicket = new Promise((resolve, reject) =>{
    setTimeout(() =>{
       resolve('tickets');
     },3000)
 });

// promiseWifeBringsTicket.then((t) =>{ console.log(`person 3: show ${t}`)});

console.log('person4 : shows ticket');
console.log('person5 : shows ticket');


//case 2 - wife hungry husband goes to bring her popcorns

const husbandBringsPopcorns = promiseWifeBringsTicket.then((t) =>{
    console.log('wife: i got the ticket');
    console.log('husband: lets go in ')
    console.log(' wife: no wait Iam hungry');
    return new Promise((resolve, reject) =>{
        resolve(`${t} popcorn`);
    })
})

//husbandBringsPopcorns.then((t) =>console.log(t));


//case 3 now the husband forgets to add butter on the popcorn and the wife is so stubborn that she needs butter


const forgotButter = husbandBringsPopcorns.then((t) =>{
    console.log('husband: i got it covered');
    console.log('husband: i  bought popcorn but forgot butter');
    console.log('wife: i need butter');
    return new Promise((resolve, reject) =>{
        resolve(`${t} butter`)
    })
})

//forgotButter.then((a)=> console.log(a));


//case 4 now wife feels thirsty so the husband go back to buy cold drink  

const getColdDrinks = forgotButter.then((t) =>{
    console.log("wife : i forgot to tell you that Iam really thirsty and i want a coke")
    console.log('husband : fine i will go and get the coke for you');
    console.log('husband: here is your coke')
    return new Promise((resolve,reject) =>{
        resolve(`${t} coke`)
    })
})

getColdDrinks.then((t) => console.log(`${t}`))





