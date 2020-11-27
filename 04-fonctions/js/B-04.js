//1- FUNCTION DECLARATION
function greet() {
    console.log('Hello there');
}

//function expression
const speak = function() {//an expression basically anytime you get a variable and set it equal to something whether it's a function, string, number
console.log('good day ');

};//at the end of an expression we should always have a semicolon

greet();//calling function or invoking function
greet();
greet();

speak();


//2- FUNCTION WITH PARAMETERS
function greet1(name) {
     console.log("Hello " + name + ':');
}

// let name = prompt("Enter a name: ");//variable 'name' can be different
greet1(name);//calling functiion


//3- FUNCTION ADD TWO NUMBER
function add(a,b) {
    console.log(a+b);
}

add(3,5);
add(2,9);//calling function


//FUNCTION RETURN
//(e.g 4) SUM OF TWO NUMBER
function add1(c,d) {
    return c+d;
}

//take input from the user
let number1 = parseFloat(prompt('Enter first number: '));
let number2 = parseFloat(prompt('Enter second number: '));

//calling function
let result = add1(number1, number2);

//display the result
console.log('The sum is ' + result);


//4- FUNCTION EXPRESSIONS
//function is declared inside a variable
let x = function(num) {
    return num*num;
};
console.log(x(4));//output = 16

//can be used as variable for other variable
let y = x(3);
console.log(y);//output = 9