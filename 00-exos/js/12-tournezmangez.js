//pour la page tournez manège
// alert('test');
let wManege = 0;//la variable de départ

while (wManege < 10) {//tant que c'est vari le test ou la condition
wManege++;
    //+= rajoute de nouveau la chîane de caractéres tant que la boucle n'est pas terminée
    document.getElementById('p1').innerHTML += 'Avec while : c\'est le tour n°' + wManege + '<br>';
    //incrémente la valeur de la variable de départ
}

//  document.getElementsByTagName('hr');

for (var i = 1; i <= 10; i++) {
    document.getElementById('p2').innerHTML += 'Avec une boucle for : c\'est le tour n°' + i + '<br>';

}

//?while avec while
let nbr = Number(prompt('Combien de tour vous voulez'));

let wManege3 = 1; 
while (wManege3 <= nbr) {
    document.getElementById('p3').innerHTML += 'Avec une boucle for : c\'est le tour n°' + wManege3 + '<br>';
    wManege3++;
}

//?for avec for
var nbr1 = Number(prompt('Combien de tour de manége avec for voulez-vous faire ?'));
for (var i = 1; i <= nbr1; i++) {
    document.getElementById('p2').innerHTML += 'Avec une boucle for : c\'est le tour n°' + i + '<br>';

}
