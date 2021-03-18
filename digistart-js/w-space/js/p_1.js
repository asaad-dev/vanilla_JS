
//? Function with returning value
function sum(n1, n2) {
    return n1 + n2;
}
document.getElementById('demo').innerHTML = sum(10,20);

//? Arrow function
hello = () => {
    return 'Hello there!';
}
console.log(hello());


// arrow function return value by default
hi = () => 'Hi there!';
document.getElementById('demo').innerHTML = hi();


