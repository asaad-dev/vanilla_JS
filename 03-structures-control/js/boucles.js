//page sur les boucles

//INTRO
//incrémentation et décrémentation

let a = 10, b = 10, c = 20, d = 20;

/*
1- INCREMENTATION
*/
document.getElementById('p1').innerHTML = ' a contient la valeur ' + a + ', là je post-incrémente de 1, ce qui fait que a est toujours égal à ' + a++ +' et donc aprés ça fera a égal à  ' + a;
// console.log(a);

document.getElementById('p2').innerHTML = ' b contient la valeur ' + b + ', là je pré-incrémente de la 1, ce qui fait que maintenant b contient ' + ++b;
// console.log(b);

/*
2- DECREMENTATION
*/
document.getElementById('p3').innerHTML = 'c contient la valeur ' + c + ', la je post-décrémente de 1, ce que fait que c est toujours égal à ' + c-- + ' et donc aprés c sera égal à ' + c;
// console.log(c);
document.getElementById('p4').innerHTML = 'd contient la valeur ' + d + ', là je pré-décrémente de 1, et donc d est égal à ' + --d;
// console.log(d);



//boucle while
//dans le p while1
let w1 = 0;//la variable de départ

while (w1 < 10) {//tant que c'est vari le test ou la condition
    //+= rajoute de nouveau la chîane de caractéres tant que la boucle n'est pas terminée
    document.getElementById('while1').innerHTML += ' w1 contient la valeur ' + w1 + '<br>';
    w1++;//incrémente la valeur de la variable de départ
}

//dans le p while2
let w2 = 10;
//boucler tant que w2 est inférieur  à 10
while (w2 < 10) {
    document.getElementById('while2').innerHTML += 'w2 contient la valeur ' + w2 + '<br>';
    w2++;
}

//on va faire la même avec do... while "faire ... tant que"
let w3 = 0;
do {//fait
    document.getElementById('while3').innerHTML += 'Voyez ! w3 contient la valeur ' + w3 + '<br>';
    w3++;
}
while (w3 < 10) //tant que le test est vari