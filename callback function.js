                                                     // CALLBACK FUNCTION IN JS //

//both the callback functions and the promise are the reason why we can perform asynchronous operations in JS


// call back functions - use to handle asynchronous operations
//are the functions which are passed in the arg of another functions and are envoked inside the outer function

//2 types of callback functions - synchronous and asynchronous

//1.Sync callback functions :-which are called immediately after the invocation of the outer function 
//2. async callback function :- called some point later 

// real life example of callbacks - loading an image on a website - if loaded synchronously, to load a big img , web will freeze 
//form sunmissions - if data of form sent to the server synchronously, then we would have to wait for the data to reach the server and then submit
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                            

                                                        //DISADVANTAGES OF CALLBACK AND WHY PROMISE WAS INTRODUCED //
//eg of callback hell and inversion of control 

//suppose we are creating a ecomm website

const cart = ['shoes', 'pants', 'kurta']; 

//api.creatOrder(cart); // creation of a order

//api.proceedToPayment(); // after creating order, we need to do payment
//api,showOrderSummary(); // after payment , we need to show the order summary
//api.updateWallet(); // we also need to update the order .

//the above api are asynchronous and we dont know how much time they will take. 
//and they are dependent on each other ie we can only only proceed to pay once we have created the  order

//so what we do in callbacks 
//we create a  function and put the proceedToPayment api inside this function and pass the whole function in the createOrder api . in this way whenever a order will get created , we will be able to pay after that

api.creatOrder(cart,function () {
    api.proceedToPayment(function (){
        api.showOrderSummary(function (){
            api.updateWallet();
        })// since there is a dependency. bina payment ke summary nahi dikhegi isliye callback mai summary generate  ki aur summary ke bina wallet update nahi hoga
    })
})


// ans  -  callback functions - 2 problems - 1. CALLBACK HELL (NESTED callback) and   2. INVERSION OF CONTROL 

// callback hell -  see the ecomm example . when we use nested callback ie callback function inside other callback functions

// inversion of control - see the ecomm example - when we pass callback function into another function we loose control over the callback function and give to the other function . 

// to solve the above problems promise was introduced. 
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
                            



