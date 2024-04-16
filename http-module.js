const http = require('http');


// to create a server
const server = http.createServer((req, res)=>{
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    if(req.url === '/'){
        res.end('Welcome to our HomePage')
    }
    res.end(`<h1>Oops</h1> <p> We can't seem to find the page you are looking for</p> <a href="/">Back Home</a>`)
});

server.listen(5000);
