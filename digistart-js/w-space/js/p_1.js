//! Declaring functions
//there are multiple ways to declare a function and assign it to a variable in javaScript

//? Function-style:
function functionName(arg1, arg2, arg3) {
    //code block...
}


//? Expression-style:
const functionName = function(arg1, arg2, arg3) {
    //code block...
}

//? Fat Arrow-styleb(ES6+):
const functionName = (arg1, arg2, arg3, argN) => {
    //code block...
}

////////////////////////////////////////////////////

function sum(n1, n2) {
    return n1 + n2;
}
sum(10,20);