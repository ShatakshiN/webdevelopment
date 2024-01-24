const fs = require('fs');

const requestHandler = (req,res) =>{
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

        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const msg = parsedBody.split('=')[1]
            console.log(msg);
            //fs.writeFileSync('message.txt', msg);  not to use because it will block the code execution because it will only resume once message.txt file is created and the message is stored in it. until then no further execution will happen. 
            fs.writeFile('message.txt',msg, err => { // always use fs.write since we can also give a callback function for error handling and it will not block further code execution. for now we are not doing error handling we are simply giving the response.
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });           
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><p>Welcome Home</p></body>');
    res.write('</html>');
    res.end();
}

//1st way to export
//module.exports = requestHandler;

//2nd way
/* module.exports = {
    handler:requestHandler,
    someText:"hard coded server"
}; */

//3rd way
/* module.exports.handler = requestHandler;
module.exports.someText = 'some hard coded text'; */

//4th way
exports.handler = requestHandler;
exports.someText = 'some hard coded server';