//Les fonctions introduction

//exemple la fonction random() "aléatoire"

document.getElementById('p1').innerHTML = Math.random();// ici on exécute le code "taché" derrière la fonction, on appelle la fonction ou on l'invoqué

console.log(Math.random());


//replace()
let discours1 = "Bonjour, je suis Donald Trump, et j'ai gagné !" 
// console.log(discours1);

let discours2 = discours1.replace('Donald Trump', 'Joe Biden');//le nom d'une fonction est suivi d'un couple de parenthèses qui contiennent des arguments le plus souvent des arguments
document.getElementById('p2').innerHTML = discours2;

//création de fonctions
//1- multiplier le résultat de random par 100
function randomX100() {
    return Math.random() * 100;
}
// console.log(randomX100());
document.getElementById('p3').innerHTML = randomX100();

//2- une simple multiplication
function multiplier(nbr1, nbr2) {
    // return(nbr1 * nbr2);
    return ('Multiplication ' + nbr1 + ' X ' + nbr2 + ' = ' + (nbr1 * nbr2));
}
// console.log(multiplier(2,6));
document.getElementById('p4').innerHTML = multiplier(145,9);

//soustraction
function soustraction(nbr1, nbr2) {
    return ('Soustraction ' + nbr1 + ' - ' + nbr2 + ' = ' + (nbr1 - nbr2));
}
document.getElementById('p5').innerHTML = soustraction(145,9);

//division
function diviser(nbr1, nbr2) {
    return ('Division ' + nbr1 + ' / ' + nbr2 + ' = ' + (nbr1 / nbr2));
}
document.getElementById('p6').innerHTML = diviser(145,9);
//addition
function addition(nbr1, nbr2) {
    return ('Division ' + nbr1 + ' + ' + nbr2 + ' = ' + (nbr1 + nbr2));
}
document.getElementById('p6').innerHTML = addition(145,9);

//modulo
function modulo(nbr1, nbr2) {
    // return ('Division ' + nbr1 + ' % ' + nbr2 + ' = ' + (nbr1 % nbr2));
    return('Le reste de la division euclidienne, ou le modulo en JS, de ' + nbr1 + 'par' + nbr2 + 'est égale à ' + (nbr1 % nbr2));
}
document.getElementById('p7').innerHTML = modulo(145,9);
