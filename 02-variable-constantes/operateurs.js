// Js pour la page pour les opérateurs

let x = 200;
let y = 3;
let z = 4;

let a = x + 1;
let b = x + y
let c = x - y;
let d = x * z;
let e = x / y;
let f = 5 % 3;
let g = 2 ** 3;

console.log(a, b, c, d, e);

console.log(f)

console.log(g)

// alert('a contient le résultat :' + a + 
// '\nb contient :' + b +
// '\nc contient :' + c +
// '\nd contient :' + d +
// '\ne contient :' + e +
// '\nf contient :' + f +
// '\ng contient :' + g 
// );

//priorité des calculs
let h = 1 - 2 - 3;
//le calcul dans h se fait de gauche à droite
console.log(h);

let k = 1 + 4 + 5;

console.log(k);

//le calcul dans j se fait de droite à gauche
let j = 2 ** 3 ** 4;

console.log(j)

let l = 1 -(2 * 3);
console.log(1);

alert('h contient :' + h +
    '\nk contient :' + k +
    '\nj contient :' + j +
    '\n1 contient :' + 1
);