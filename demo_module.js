var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

var httpServer = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // testing module
    res.write("The date and time are currently: " + dt.myDateTime() + "<br/>"); 
    // test read querystring
    res.write(req.url + "<br/>"); 
    // test split querystring
    var q = url.parse(req.url, true).query;
    console.log(q);
    var txt = q.year + " " + q.month
    res.end(txt); 
});

httpServer.listen(8080);


