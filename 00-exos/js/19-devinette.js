//pour la page devinette
alert('Bienvenue dans le jeu !');

//on doit trouver un nombre au hasard que l'utilisateur doit deviner en 3 étape
//1- le nombre

let nombreAuHasard = Math.random();//   nombre décimal entre 0 et 1
console.log(typeof nombreAuHasard, nombreAuHasard);

//2- on multiplie le nombre trouvé par 100

let nombreX100 = nombreAuHasard * 100;
console.log(nombreX100);

//3- on arrondi le nombre
let nombreArrondi = Math.floor(nombreX100);//    Math.floor arroundi un nombre décimal au nombre inférieur
console.log(nombreArrondi);

// 2 et 3 autre solution pour arroundir le nombre
// nombreX10 = parseInt(nombreAuHasard * 100);
// console.log(nombreX100);

//suite de l'exo
for(var i = 0; i <= 6; i++) {
    choixUtilisateur = parseInt(prompt('Le jeu est simple : je pense à un nombre entre 0 et 100. A ton avis quel est ce nombre ? Tu as droit à 6 essais...")'));// parseInt nous assure que le nombre est un nombre entier (ex. si on rentre 92.3 il considére 92)
    if (!isNaN(choixUtilisateur)) {//nous assure que la saisie est un nombre est-ce bien un nombre ?
        if(nombreArrondi === choixUtilisateur) {//oui c'est un nombre et le égal au nombre au hasard
            alert('Bien joué');
            i = 6;//la boucle s'arrête
        } else {
            if(nombreArrondi < choixUtilisateur) {
                alert("Le nombre est plus petit ; essai " + i + "/6");
            } else {
                alert("Le nombre est plus grand ; essai " + i + "/6");
            }
        }//fin if plus grand ou plus petit
    } else {
        alert('Il faut choisir un numbre !');
    }//fin if principal
}// fin for boucle 6 fois

alert('La bonne réponse était ' + nombreArrondi);
document.getElementById('p1').innerHTML = "La bonne réponse était " + nombreArrondi;



//? autre solution Justine
/* var nbrHasard = Math.floor(Math.random() * 100);
console.log(typeof nbrHasard, nbrHasard);for(i = 1; i <= 6; i++){
    var choixUser = parseInt(prompt('Trouvez quel est le nombre mystère, compris entre 0 et 100. Attention, vous n\'avez que 6 essais !'));
        if ((choixUser < 0) || (choixUser > 100)) { // on teste si en dessous de 0 et au dessus de 100
            alert('Vous devez saisir un nombre ENTRE 0 et 100 idiot !');
            i--; // ça ne compte pas dans les essais, en décrémentant i 
        } else if (isNaN(choixUser)) { // on teste si l'utilisateur met autre chose qu'un chiffre ou un nombre
            alert('Vous devez saisir un NOMBRE on vous dit !');
            i--;// ça ne compte pas dans les essais
        } else if (choixUser < nbrHasard) {
            alert('Visez plus haut ! Essai ' + i + '/6.');
        } else if (choixUser > nbrHasard) {
            alert('Visez plus bas ! Essai  ' + i + '/6.');
        } else {
            document.getElementById('p1').innerHTML = 'Vous avez gagné, bravo ! La réponse était bien '+ nbrHasard +'.';
            break; // on casse la boucle
        }
    document.getElementById('p1').innerHTML = 'Dommage, vous n\'avez pas trouvé la bonne réponse, c\'était '+ nbrHasard +'.';
}//fin boucle principale */

//? autre solution AUDREY

/* var solution = Math.floor(Math.random() * 100) + 1 ; // Je génère un nombre aléatoire entre 1 et 100
console.log("(La solution est " + solution + ")");for (var i = 1; i <= 6; i++) { // je lance la boucle, où i <=  nombre d'essais
    var essai = parseInt(prompt("Tu as 6 essais pour trouver le nombre mystère, choisis un nombre entre 1 et 100 :"));
    if (essai === solution) {
        // console.log("Vous avez trouvé en " + i + " essai(s)");
        alert("Bravo, Vous avez trouvé en " + i + " essai(s)");
        break; // si la réponse est trouvé, la boucle s'arrête et la console l'affiche, en précisant le nombre d'essai nécessaires.
        // OU i = 6 pour remplacer le break;
    } 
    if (essai < solution){ // comparent la valeur "essai" à la valeur "solution"
        // console.log(essai + " est trop petit");
        alert(essai + ' est trop petit... Vous en êtes à ' + i + ' sur 6 tentatives!!');
    } 
    if (essai > solution) {
        // console.log(essai + " est trop grand");
        alert(essai + ' est trop grand... Vous en êtes à ' + i + ' sur 6 tentatives!!');
    } 
    if (i === 6){
        // console.log("Vous avez perdu ! Le nombre était : " + solution);
        alert('Vous avez perdu, le nombre était ' + solution ); // si la solution n'est pas trouvée, la console l'affiche en donnant la solution
    }
    if (isNaN(essai)) { //si ce n'est pas un nombre
        alert('Votre proposition n\'est pas un nombre !! Vous en êtes à ' + i + ' sur 6 tentatives!!');
    } console.log(i);   
} // fin boucle for */