var fs = require('fs');

/* fs.appendFile create file tutorial
fs.appendFile('mynewfile.txt', 'Hello content! Created by fs.appendFile', function(err) {
    if(err) throw err;
    console.log('Saved!');
})
*/

/* fs.open create file tutorial
fs.open('mynewfile2.txt', 'w', function(err){
    if(err) throw err;
    console.log('saved!');
});
*/

/* fs.writeFile create file tutorial
fs.writeFile('./mynewfile3.txt', 'Hello content! Created by fs.writeFile', callbackError());

function callbackError(err){
    if(err) throw err;
    console.log('Saved!');
}
*/

/* fs.append file updating file tutorial
fs.appendFile('./mynewfile.txt', ' - this text is added by fs.appendfile', function(err) {
    if(err) throw err;
    console.log('Updated!')
})
*/

/* fs.writeFile file replacing file tutorial
fs.writeFile('./mynewfile3.txt', 'This text have replaced the original text by fs.writeFile', function(err){
    if(err) throw err;
    console.log('Replaced!');
})
*/

/* fs.unlink deleting file tutorial
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
*/

/* fs.rename renaming file tutorial
fs.rename('mynewfile.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
*/



