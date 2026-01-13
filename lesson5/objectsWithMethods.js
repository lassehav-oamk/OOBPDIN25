let example = {
    a: 10,
    b: 20,
    someMethod: function() {
        console.log("Hello from someMethod!");
    }
}

example.someMethod();
console.log(example.a);

let someVariableName = function() {
    console.log("Hello from someVariableName function!");
}
let someOtherVariableName = 10;

function namedFunction() {
    console.log("Hello from namedFunction!");
}
namedFunction();
someVariableName();

// function passed as a parameter to another function
function functionExecutor(paramFunction) {
    paramFunction();
}
console.log('function Executor about to run:')
functionExecutor(namedFunction);

