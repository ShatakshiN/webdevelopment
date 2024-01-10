const http  = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if (url ==="/home"){
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><p>Welcome Home</p></body>');
        res.write('</html>');
        return res.end();
    }else if (url ==="/about"){
        res.write('<html>');
        res.write('<head><title>about</title></head>');
        res.write('<body><p>welcome to about us page</p></body>');
        res.write('</html>');
        return res.end();

    }else{
        res.write('<html>');
        res.write('<head><title>node</title></head>');
        res.write('<body><p>Welcome to my node js server</p></body>');
        res.write('</html>');
        return res.end();
    }
})

server.listen(4000);


/* in the above code we are using const url for accessing the url of the req. then we are checking that if the url is /home or /about or /node.
for specific url , specific msges are to be sent as response.

note - we are using return res.end() so that the subsequent code doesn't gets executed and our response ends there only

res.write() method = used to send a chunk of response body to the client. It allows you to send multiple chunks of data as part of the response. 

syntax = response.write(chunk,encoding,callback);

chunk = can be buffer or string data.
encoding = by default is utf8. accepts string data (optional param)

in the above case- each res.write() call sends a chunk of the HTML response.

 */