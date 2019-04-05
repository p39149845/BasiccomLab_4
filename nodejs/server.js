var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
    if (req.url === '/' || req.url === '/index') {
        res.writeHead(200, { 'content-type': 'text/html' });
        var mystream = fs.createReadStream(__dirname + "/" + 'index.html', 'utf8');
        mystream.pipe(res);
    }
    else if (req.url === '/Gallery') {
        res.writeHead(200, { 'content-type': 'text/html' });
        var mystream = fs.createReadStream(__dirname + "/" + 'Gallery.html', 'utf8');
        mystream.pipe(res);
    }
    else if (req.url === '/Contact') {
        res.writeHead(200, { 'content-type': 'text/html' });
        var mystream = fs.createReadStream(__dirname + "/" + 'Contact.html', 'utf8');
        mystream.pipe(res);
    }

    else if (req.url.match("\.css$")) {
        var cssPath = path.join(__dirname, 'css', 'style.css');
        var mystream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        mystream.pipe(res);

    }
    else if (req.url.match("\.jpg$")) {
        var imagePath = path.join(__dirname, 'Gallery', 'Me.jpg');
        var mystream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/jpg" });
        mystream.pipe(res);
    }
    else if (req.url === '/api/users') {
        const users = [
            { name: 'Pumipat', age: 20 },
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));

    }
    else if (req.url.match("\.js$")) {
        var jsPath = path.join(__dirname, 'myscript.js');
        var mystream = fs.createReadStream(jsPath);
        res.writeHead(200, { "Content-Type": "text/js" });
        mystream.pipe(res);
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        var mystream = fs.createReadStream(__dirname + "/" + 'notfound.html', 'utf8');
        mystream.pipe(res);
    }

}).listen(5500);
console.log('Server is running');
