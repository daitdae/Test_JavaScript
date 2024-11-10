(function init(){
    console.log("initialized");
})(); // initialized

// init(); // ReferenceError: init is not defined

(function sum(a,b){
    console.log(a + b);
})(10,20); //30
