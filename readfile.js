//readfile.js

var fs = require('fs'), fileContent = 'empty content yet';
fs.readFile(__filename, 'utf-8', function(err,file){
  if(err){
    console.log(err);
    return;
  }
  fileContent = file;
  
  console.log('content in file '+__filename+':'+fileContent);
  console.log('==> end readfile \n');
});

console.log("no block handling comes first");
