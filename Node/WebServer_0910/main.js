var my_module_function = require('./index');

//function 자체를 변수로 쓰기 위함
var my_var = new my_module_function;

console.log(my_var.name);
console.log(my_var.department);

//console.log('Hello world!');

//var fs = require('fs');

//var content = fs.readFileSync("National anthem.txt","utf-8");

//console.log(content);
//console.log('Read File..');

//var express = require('express');
//var uuid4 = require('uuid4');

//console.log(uuid4());