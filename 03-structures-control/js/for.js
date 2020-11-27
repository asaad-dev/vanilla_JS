//page for pour

for (let i = 0; i < 10; i++) {// (1- initialisation 2- test ou condition de sortie  3- incrémentation)
    document.getElementById('p1').innerHTML += ' i contient la valeur ' + i + ' qui est incrémenté ' + + ' à chaque passage, ' + (i + i) + 'de la boucle.<br>'
}
// console.log(i);
//root 
//i = itérat

for (let i = 0; i < 10; i++) {// for (1- initialisation de la variable 2- test ou condition de sortie 3- incrémentation)
    document.getElementById('tr1').innerHTML += '<tr><td>i contient la valeur ' + i + ' qui est incrémenté à chaque passage de la boucle.</td><td>passage n° ' + (i +1) + '</td></tr>';
}

//for avec un if et l'instruction break
/* if (test) {
    BLOCDECODE ou INSTRUCTION
} */

for (let arreteToi = 0; arreteToi < 100; arreteToi++) {
    if (arreteToi == 10) {
        break;//instruction
    }//fin du if
    document.getElementById('p2').innerHTML += 'La variable arreteToi contient la valeur ' + arreteToi + ' à chaque pasage de la boucle for.<br>';
}//fin du for
console.log(arreteToi);
//for avec une instruction continue
for(let item = 0; item < 10; item++) {
    if(item % 2 != 0) {//le reste de la division n'est pas égal à 0 (donc item est un chiffre impair)
        continue;//passe à la suivant
    }//fin du if
    document.getElementById('p3').innerHTML += 'la variable item contient la valeur ' + item + ' à chaque passage de la boucle.<br>';
}//fin du for


