console.log('Hello world!');

var fs = require('fs');

fs.readFile("National anthem.txt","utf-8", function(err, content){
    console.log(content);
});

console.log('Read File..');