//Pour la page multiplication
// alert('Hello there');

/* let nb1 = parseInt(prompt('Choisi un 1er nombre ', ''));
let nb2 = parseInt(prompt('Choisi un 2er nombre  compris entre 2 et 9', ''));

for (let nb1 = 10; nb1 * nb2; nb1++) {// for (1- initialisation de la variable 2- test ou condition de sortie 3- incrémentation)
    document.getElementById('p1').innerHTML =  (nb1 +nb2) + '';
} */

//EXO 1 
var nombre1 = Number(prompt('Choisi un 1er nomber :'));
console.log(typeof nombre1, nombre1);

for (var i = 1; i <=10; i++) {//1- initialisation de la variable; 2- test ou condition de sortie; 3- incrémentation
    var resultat = nombre1 * i;    // on fait l'opération avant et on la passe en variable
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + resultat + '<br>';//le nombre1 à chaque passage FOIS la variable i = la variable résultat

document.getElementById('p1').innerHTML = '******';

}for (var i = 1; i <=10; i++) { 
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + nombre1 * i + '<br>';//on fait l'opération dans la bloce de code
}