// JS pour la page permutation
// Permutation de variable de type number
var nombre1 = 5;
var nombre2 = 3;

// console.log(nombre1);
// console.log(nombre2);

document.getElementById('p1').innerHTML = ( 'DÉPART >> nombre1 = ' + nombre1);
document.getElementById('p2').innerHTML = ( 'DÉPART >> nombre2 = ' + nombre2);
nombre1 = nombre1 + nombre2; // J'additionne la 1ère variable à la 2ème variable
nombre2 = nombre1 - nombre2;//  On retrouve grâce à cette opération la nouvelle valeur de nombre1 que l'on passe dans nombre2.
nombre1 = nombre1 - nombre2; // Pour retrouver la valeur d'origine de nombre2, on fait l'opération inverse que l'on affecte a nombre1.

document.getElementById('p-*').innerHTML = ( '**************** ')


document.getElementById('p3').innerHTML = ( 'ARRIVÉE >> nombre1 = ' + nombre1);
document.getElementById('p4').innerHTML = ( 'ARRIVÉE >> nombre2 = ' + nombre2);

// console.log(nombre2);
// console.log(nombre1);

var temp; // variable temporaire
temp = nombre1; // on dit à cette variable temporaire de stocker la valeur de nombre1; içi 10
nombre1 = nombre2; // on dit ensuite à cette variable nombre1 (=10) de stocker la valeur de nombre 2 (=7)
nombre2 = temp; // on dit à nombre2 se stocker le contenu de notre variable temporaire (=10), donc 2=10

console.log(nombre1);//nombre1 = nombre2 = 5
console.log(nombre2);//temp = nombre1 = 3