console.log("before promise");

new Promise(function(resolve, reject){
     setTimeout(function(){
          resolve('resolved');
     }, 2000);
})
.then(function(result){
     console.log('.then returned: ' + result);
});

console.log('after promise');
