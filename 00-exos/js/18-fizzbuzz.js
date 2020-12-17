//pour la page fizzbuzz
// alert('coucou');

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {// if the number is divisible by 3 and 5, print in the console "fizzbuss" //? on utilisant modulo -> Affectation du reste
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {// if the number doesn't divide by both 3 & 5, but it is divisible by 3 only print "Fizz"
        console.log("Fizz");
    } else if (i % 5 === 0) {// if the number doesn't divide by both 3 & 5, but it is divisible by 5 only print "Buzz"
        console.log("Buzz");
    } else {// if neither of these cases print the number itself
        console.log(i);
    }// fin if
}// fin for

//2 version
console.log('seconde version >>>>>');for (var nombre = 1; nombre <=100; nombre++) {
    if ((nombre % 3 === 0) && (nombre % 5 === 0)) // le nombre est divisible par 3 ET 5 
        console.log('FizzBuzzzzz'); 
    else if (nombre % 3 === 0) 
        console.log('Fizzz');
    else if (nombre % 5 === 0) 
        console.log('Buzzzz');  
    else 
        console.log(nombre);
    }//fin for

//3 version Mike
for (var nombre = 1; nombre <= 100; nombre++) {
    var message = '';//initialisation de la var message
    if (nombre % 3 === 0) { //Si le modulo de 3 est egale a 0, il est divisible par 3
        message +='Fizz';
        }
    if (nombre % 5 === 0){ //Si le modulo de 5 est egale a 0, il est divisible par 5
        message += 'Buzz';
        }
    if (message == ''){
        message = nombre;
        }
    console.log(message);
}//fin de for