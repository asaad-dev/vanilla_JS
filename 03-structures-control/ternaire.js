// page sur les ternaires

let x = 15;
let y = -20;

// document.getElementById('p1').innerHTML = x >= 10 ? 'x supérieur ou égle à 10' : 'x strictement inférieur à 10';

//faire un if else pour vérifier si x est supérieur, ou égale à 10
if(x >= 10) {
    document.getElementById('p1').innerHTML = 'x supérieur ou égle à 10';
} else {
    document.getElementById('p1').innerHTML = 'x strictement inférieur à 10';
}

//la même condition en ternaire // ? = if : = else
document.getElementById('p1').innerHTML = x >= 10 ? 'x supérieur ou égal à 10' : 'x est inférieur à 10'

// faire un if else pour vérifier si y est supérieur
if(y > 10) {
    document.getElementById('p3').innerHTML = 'y est supérieur à 10';
} else {
    document.getElementById('p3').innerHTML = 'y est inférieur à 10';
}

//la même condition en ternaire // ? = if : = else
document.getElementById('p3').innerHTML = y > 10 ? 'x supérieur à 10' : 'y est inférieur à 10';
