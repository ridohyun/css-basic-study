console.log('Hi');

setTimeout(function(){
    console.log('event 1')
},5000);

setTimeout(function(){
    console.log('event 2')
},4000);

setTimeout(function(){
    console.log('event 3')
},3000);

console.log('Bye');