const http = require('http');
const url = require('url');
const fs = require('fs');

const handleFile = (req, res, callback) => {
    let path = url.parse(req.url).pathname;
    let fileName = "." + path;

    if (path == "" || path == "/") {
        path = "/index.html";
    }

    fs.readFile(fileName, (error, data) => {
        if (error) {
            if (callback) {
                if (!callback(req, res)) {
                    res.writeHead(404, {"Content-Type": "text/html"});
                    res.end("Page not found");
                }
            }
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        }
    })

    res.end();
}

const handleRequest = (req, res) => {
    let path = url.parse(req.url).pathname;
    let method = req.method;

    if (method == 'PUT') {
        res.writeHead(404, {"Content-Type": "text/html"});
    }

    if (path == "/teste") {
        res.end("Teste");
        return true;
    }

    return false;
}

http.createServer((req, res) => {

    handleFile(req, res, handleRequest);

}).listen(3030, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is running on Port 3030');
    }
});