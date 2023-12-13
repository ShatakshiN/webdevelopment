console.log('person1 : shows ticket');
console.log('person2 : shows ticket');

const premovies = async () =>{
    const promiseWifeBringsTicket = new Promise((resolve, reject) =>{
        setTimeout(() =>{
           resolve('tickets');
         },3000)
     });

    

    const husbandBringsPopcorns = new Promise((resolve, reject) => {
        resolve('popcorns');
    })

    const forgotButter = new Promise((resolve,reject) =>{
        resolve('butter');
    })

    const getColdDrinks = new Promise((resolve,reject) =>{
        resolve('coke');
    })


    let ticket = await promiseWifeBringsTicket;

    console.log(`i got the ${ticket}`);
    console.log('husband: lets go in ')
    console.log(' wife: no wait Iam hungry');

    let pop = await husbandBringsPopcorns;

    console.log('husband: i got it covered');
    console.log(`husband: here's your ${pop}`);
    console.log('wife: i need butter');

    let butter = await forgotButter;
    console.log(`husband: here is your ${butter}`);
    console.log('husband: now lets go');
    console.log("wife : i forgot to tell you that Iam really thirsty and i want a coke");

    let drink = await getColdDrinks;
    console.log(`husband: here is your ${drink}`);
    console.log('husband: shall we go now ?');
    console.log('wife:okayyy')

    return ticket;
    
}

premovies().then((m) => console.log(`person3: shows ${m}`));

console.log('person4 : shows ticket');
console.log('person5 : shows ticket');