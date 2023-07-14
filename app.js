const http = require('http');
const { url } = require('inspector');

// METHOD 1
// function requestListener(req, res) {
//     console.log(req, res);
// }
// http.createServer(requestListener);

// METHOD 2
// http.createServer(function(req, res){ do your code here });

// METHOD 3
const server = http.createServer((req, res) => {
    console.log('req.url : ', req.url);
    console.log('req.method : ', req.method);
    console.log('req.headers : ', req.headers);
    // process.exit();
    res.setHeader("Content-Type", 'text/html');
    res.write('<html><head><title>My First Page</title></head><body><h1>Hello from my Node.js Server!</h1></body></html>')
    // res.statusCode(200);
    // res.statusMessage("OK");
    res.end();
});

server.listen(3000)