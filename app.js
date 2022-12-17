const http = require('http');
const fs = require('fs');

const server =  http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/users" method="POST"><input type="text" name="users"></input><button>send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/users' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }); 
        });
    }
    res.setHeader('contents-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Fist Page</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>')
    res.write('</html>');
    res.end();
});
server.listen(3000);