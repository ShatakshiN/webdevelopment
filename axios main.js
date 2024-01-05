//AXIOS GLOBALS 
axios.defaults.headers.common['X-Auth-Token'] = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"



// GET REQUEST
function getTodos() { 
    /* longer syntax

    axios ({
      method : 'get',
      url : "https://jsonplaceholder.typicode.com/todos",
       params : { // by adding this params key inside which we are using limit ,by this we can only show the first 5 data from todos on our page
           _limit : 5
      }
    })
        .then((msg) => console.log(msg.data)); // this will only give the data from the fake api (todos)
        .then(res => console.log(res)); // by this - can also see data,status of api req, header ,config etc
        .then (msg => showOutput(msg)); // the showOutput function is written below by calling the function, we can show data, header etc on the webpage
 */
    //shoter way to do the GET request in Axios
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then(msg => showOutput(msg))
    .catch(err => console.error(err))
  }
  
  // POST REQUEST
function addTodo() {
    //longer syntax 
    /* axios ({
      method : 'post',
      url : "https://jsonplaceholder.typicode.com/todos",
      data :{
        title : "new todo added by Shatakshi", // here we are adding data because we are putting a post req 
        completed : false
      }
    })
      .then(res => showOutput(res)); */
    
    //shorter syntax
    axios.post("https://jsonplaceholder.typicode.com/todos?_limit=5", {title : 'Shatakshi Nimare', completed: false})
      .then(res =>showOutput(res))
    
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    // longer syntax
    /* axios ({
      method : 'put',
      url : "https://jsonplaceholder.typicode.com/todos/1",
      data :{
        title : "new todo added by Shatakshi", 
        completed : false
      }
    })
      .then(res => showOutput(res)); */
    
    //shorter suntax for PUT 
    axios.put("https://jsonplaceholder.typicode.com/todos/1",{title:"updated todo", completed : true})
      .then(res => showOutput(res))

    //longer syntax of patch
      /* axios ({
        method : 'patch',
        url : "https://jsonplaceholder.typicode.com/todos/1",
        data :{
          title : "new todo added by Shatakshi", 
          completed : false
        }
      })
        .then(res => showOutput(res)); */
      
      //shorter 
      axios.patch("https://jsonplaceholder.typicode.com/todos/2", {title:" look at me i got updated cuz of patch", completed: true})
        .then(res => showOutput(res))

    
    
    
  }
  
  // DELETE REQUEST
function removeTodo() {
    axios.delete("https://jsonplaceholder.typicode.com/todos/3")
      .then(res => showOutput(res))

  } 
  
  // SIMULTANEOUS DATA - to do simultaneous req we do the axios.all method which takes in an array of reqs.
function getData() {
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/todos'),
      axios.get('https://jsonplaceholder.typicode.com/posts')
    ])
      
      /* .then(res =>{
        console.log(res[0]), //in inspect we can see the data of todos which is at the 0th index of the req array
        console.log(res[1]), //posts data in inspect  
        showOutput(res[1]) //showing the data from posts 
      })
 */
    //cleaner way to write the code :-
    //Axios.spread() method separates the responses and assigns each response to its variable.
      .then(axios.spread((todos,posts) => {
        showOutput(posts)
      }))
      
  }
  
  // CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers :{
      'Content-Type' : 'appication/json',
      Authorization : 'ShatakshiToken'
    }    
  }
  axios.post("https://jsonplaceholder.typicode.com/todos?_limit=5", {title : 'Shatakshi Nimare', completed: false},config)
    .then(res =>showOutput(res))
  
  
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse(){
    const options ={
      method : 'post',
      url : "https://jsonplaceholder.typicode.com/todos",
      data :{
        title : "transform req", 
    },
    transformResponse: axios.defaults.transformResponse.concat(data =>{ // here data param can take the data present inside the options obj
      data.title = data.title.toUpperCase();
      return data;
    })
  }
  axios(options)
  .then(res => showOutput(res));
}

  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
// INTERCEPTING REQUESTS & RESPONSES - whenever we click on GET, POST etc button on the webpage, the request along with its method will be logged in the inspect console stating the method and url of the req that we made.
axios.interceptors.request.use(
  config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url}`);
    return config;
  }, error => {
    new Promise.reject(error);
  }
  
);
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);