const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');

const server = http.createServer((req,res)=>{
    const url = req.url; // to check which url we currently have
    const method = req.method;
    //
    if (url ==="/"){
        res.write('<html>');
        res.write('<head><title>hello</title></head>');
        res.write('<body><form action ="/message" method ="POST"> <input type = "text" name = "inputFieldData" placeholder = "enter msg"></input><button type ="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === "/message" && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            body.push(chunk);
        })

        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const msg = parsedBody.split('=')[1]
            console.log(msg);
            fs.writeFileSync('message.txt', msg); 


        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><p>Welcome Home</p></body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);


//note - 
/*line 28, will get executed after the 34th line ie after we had already sent a response. this has 2 implications(conclusions that can be drawn)
1. sending the response (line 32-34) doesnt means that our eventListners(callback of the req.end) on line 23(req.on(end ,()=>{till line 24-28})) is dead.
    everything from 24-28 will still get executed even our response is gone. but it also means that if we do something in the eventListner that
    influences the response, the above is the wrong way of setting it up. we should also move the response code into the eventListner if we have such 
    adependency. 
    the correct way :-
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const msg = parsedBody.split('=')[1]
            console.log(msg);
            fs.writeFileSync('message.txt', msg); 
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })

2. its also imp to understand that for eg - in line 23 (callback() of the req.end) and line 5 (callback () of the http.creatServer() ) where node.js
        uses a pattern where node.js executes these callback functions at alater point of time which is called asynchronously.
        but its not always the case that a callback function is executed at a later point of time. 

        so in the above cases for eg - line 2
        the callback function ie
            req.on('end', (//taking about this callback function//)=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const msg = parsedBody.split('=')[1]
            console.log(msg);
            fs.writeFileSync('message.txt', msg); 
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
       
        will not get executed immidiately. 

        so we can think like, nodejs has this internal registry that registers events and their eventListneres and a callback function
        is such a eventListner. 
        so what happens is once nodejs is done parsing the request,it will look for the events it registered (eg- req.end) and then it looks for
        eventListners for that specific event (the callback inside the req.end(()=>{....})) and then calls them . but IT NEVER PAUSES THE CODE 
        EXECUTION.
        
        so the code exectution is like this:- 
            first it will encounter the if condition on line 17, 
            then register the req.on event and its eventListner and will not get executed immidiately.
            then register the req.end event and its eventListner and will not get executed immidiately.
            and then it directly executes line no 38 and below. and so when we enter a msg in the input fiels adn press send button , we will directly 
            be redirected to the page showing welcome home message. 
            and the return statements ie :
                if (url ==="/"){
                    .
                    .
                    .
                    return res.end();
                }
                and 
                req.on('end', (//taking about this callback function//)=>{
                    .
                    .
                    .
                    return res.end();
                })

            will not quit the over arching creatServer() statement. so the event and their listners will only gets regiester, the control moves to line 38
            and once the listners will get eventually executed, it will be too late and we will get an error - "cant set headers after they are sent to client"
            and if the nodejs waits for the callbacks to execute right away, it will slow down the entire program and it will not be able to handle our
            req efficiently. 
            what we want is to be in the event loop and wait for it to execute the callbacks and never block the event loop for too long. 
            
        so to avoid this simply return the event
            return  req.on('end', (//taking about this callback function//)=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const msg = parsedBody.split('=')[1]
            console.log(msg);
            fs.writeFileSync('message.txt', msg); 
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })

       ** modifed code on note the corrected version is in file correctserver 9-13.js
                */


         
        

