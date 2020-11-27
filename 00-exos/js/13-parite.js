//pour la page parité

//? EXO 1
for(var i = 1; i <= 10; i++) {
    if(i % 2 === 0) { // le réste est égal à 0 donc le chiffre est pair 
        console.log(i + ' est pair');
    } else {    //  sinon c'est impair
        console.log(i + ' est impair');
    }
}


//? EXO 2
let nbrUtilisateur = parseInt(prompt('Exo 2 : Rentre un nombre entier, fissa !'));//parsInt on est sûr que c'est un entier avec Number() on risque d'avoir un décimal 
console.log(typeof nbrUtilisateur, nbrUtilisateur);let nbrUtilisateurMax = (nbrUtilisateur + 1000);
console.log(typeof nbrUtilisateurMax, nbrUtilisateurMax); for (let i = nbrUtilisateur; i <= nbrUtilisateurMax; i++) {
    if (i % 2 === 0) {// si i est pair
         document.write('<p>' +  i + ' est pair</p>');
    } else {// sinon si i est impair
        document.write('<p>' +  i + ' est impair</p>');
    }
}