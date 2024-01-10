const http = require('http');  // exporting the http module of node.js

const server = http.createServer((req,res)=>{ 
    res.end('Shatakshi Nimare') // shatakshi Nimare will be visible on the page . 
    console.log(req); // visible to us on the terminal- shows all the things present in the req like header, http method etc
    //process.exit(); // forcefully terminates the server. 
});

server.listen(4000); // the server will run on 4000 port number ie will be listen at that particular port

//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//notes - 
//http.createServer(requestListener) = It is used to create an HTTP server instance. 

/* the call back function inside the creatServer()  ie  requestListner function = requestListener function is the function that is executed each time the server gets a request
This function is asynchronous, and it allows you to define how your server should respond to different types of requests.

req(request object) = The req object represents the incoming HTTP request from the client (browser, in this case).
it contains information about the request made by the client, such as the URL, HTTP method (GET, POST, etc.), headers, and any data that might be sent with the request (e.g., form data or JSON payload).
Developers can access different properties of the req object to extract information about the client's request and use it to make decisions or process the request accordingly.

res (response object) = represents the server's response to the client's request.
It provides methods and properties that allow developers to control what will be sent back to the client.
Developers can use the res object to send data back to the client, whether it's HTML, JSON, plain text, or other types of content.

res.end() = method in Node.js is used to end the response process and send the specified data to the client. It essentially signals to the server that the response is complete and ready to be sent back to the client. 
The method takes an optional parameter, which represents the data to be sent in the response body ( in this case, 'shatakshi Nimare').
method is crucial because it marks the completion of the response, and once it is called, no further modifications to the response headers or body should be made. It signals that the server has finished processing the request and is ready to send the response back to the client.

our server will never stop running becauseof the requestListener function . we can stop the server by using process.exit();  */