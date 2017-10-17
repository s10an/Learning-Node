var http = require('http');
var fs = require('fs');
var url = require('url');
var formidable = require('formidable');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = q.pathname;
    switch(filename) {
        case '/uploadfile':
            console.log('upload file');
            fs.readFile(`./html${filename}.html`, function(err,data){
                if(err){
                    res.writeHead(404,{'Content-Type': 'text/html'});
                    return res.end("404 Not Found");
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
            break;
        case '/fileuploading':
            console.log('file uploading');
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
                res.write('File uploaded');
                res.end();
              });
              break;
        default:
            console.log('unknown site');
            res.writeHead(404,{'Content-Type': 'text/html'});
            return res.end("404 Not Found");
            break;
    }
}).listen(8080);