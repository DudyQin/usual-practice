(function () {
    var http = require('http');
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('hello world 1');
    }).listen(1337, '127.0.0.1');
    console.log('server sunning at 127.0.0.1:1337');
})();