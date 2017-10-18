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
                    return returnNotFound(res);
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
                if(files.filetoupload === undefined ){
                    return returnBadRequest(res);
                }
                var oldpath = files.filetoupload.path;
                var newpath = 'C:/temp/' + files.filetoupload.name;
                fs.rename(oldpath, newpath, function (err) {
                    if (err) throw err;
                });
                res.write('File uploaded and moved!');
                res.end();
            });
            break;

        default:
            return returnNotFound(res)
            break;
    }
}).listen(8080);

function returnNotFound(res){
    console.log('Not Found');
    res.writeHead(404,{'Content-Type': 'text/html'});
    return res.end("404 Not Found");
}

function returnBadRequest(res){
    console.log('Bad Request');
    res.writeHead(400,{'Content-Type': 'text/html'});
    return res.end("400 Bad Request");
}