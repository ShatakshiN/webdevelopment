const posts = [{title:'post1', lastActivity:'6th Dec 2023'}]

function createPost(posts){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let newEntry = posts.push({title:'post2', lastActivity:'7th dec 2023'})
            resolve()
        },2000)
    })

}

function updateUserActivity(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            posts.lastActivity = new Date().getTime();
            resolve(); 

        },1000)
        

    })
}


Promise.all([createPost(posts), updateUserActivity()]).then(()=>console.log(posts.lastActivity))
