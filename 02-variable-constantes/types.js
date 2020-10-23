//Js pour la page types de données

//1- string
let presentation = "Je m'applle Michaêl.";
let age = 25;
let age2 = 60;

//console.log de la variable presentation
console.log(typeof presentation);
//1- récupérer dans le document un élément dont l'id est p1
//2- remplacer le contenu d'un élément indentifié par son 
//3-puis on concaténe une string et le résultat de la fonction typeof()
//4- le résultat s'affiche dans la page
document.getElementById('p1').innerHTML = "Type de donnée pour la variable présentation :" + typeof presentation;

document.getElementById('p2').innerHTML = "Type de donnée pour la variable age :" + typeof age;

document.getElementById('p3').innerHTML = "Type de donnée pour la variable age2 :" + typeof age2;

let phrase = 'Mon film préféré est "20000 lieues sous les mers".';
console.log(phrase);

//2- Number 
let x = 10;
let y = 20000;
let z = 3.14;
console.log(z);
//2 vaeurs dans le console.log
console.log(typeof x, z);

// 3- Boolean(booléen)
// let vari = true;
// let faux = false;
let test = 8 > 4;
console.log(typeof test, test);

// 4- NULL and UNDEFINED
let arbre;
arbre = '';

console.log(typeof arbre)

let nul = null;
let indefini;

document.getElementById('p4').innerHTML = "Type de donnée pour la variable nul :" + typeof nul;

document.getElementById('p5').innerHTML = "Type de donnée pour la variable undefined :" + typeof indefini;