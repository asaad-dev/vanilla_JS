//08 Baccalauréat
let moyenne = parseFloat(prompt('Quelle est ta moyenne au Bac ?'));  


if(moyenne < 10) {  //inférieur à 10
    document.getElementById('p1').innerHTML = 'Tu es recalé :-(';
} else if(moyenne >= 10 && moyenne <= 12) { //inférieure ou égal ET inférieur ou 12
    document.getElementById('p1').innerHTML = 'Tu passes ! ';
} else if(moyenne > 12) { //inférieure
    document.getElementById('p1').innerHTML = 'Barvo pour la mention :-)' ;
} else {
    document.getElementById('p1').innerHTML = 'Il aurait fallu réviser plus :-)';
}

/* else (Number.isNaN(Number.parseFloat(moyenne))) {
    document.getElementById('p1').innerHTML = 'C\'est une chaîne de caractères (parsFloat) convertit le en un nombre flottant.'; */

    
    let moy = parseFloat(prompt('Quelle est ta moyenne au bac ? ')); // le parsefloat permet d'assurer que la réponse sera considéré comme un "number", dans le cas d'un nombre décimal
    console.log(typeof(moy));function baccalaureat(moy){
        if ( (!isNaN(moy))) { // est bien un nombre ??
            if(moy >= 0 && moy <= 10 ){
                document.getElementById('p1').innerHTML = 'Tu es recalé !';
            }else if(moy >= 10 && moy <= 12){
                document.getElementById('p1').innerHTML = 'Tu passes !';
            }else if(moy > 12 && moy <= 20){
                document.getElementById('p1').innerHTML = 'Bravo pour la mention ! :) ' ;
            }else {
                document.getElementById('p1').innerHTML = 'Votre nombre doit être compris entre 0 et 20! :) '; 
            }
        }else{
            return document.getElementById('p1').innerHTML = 'Yahoooo! es tu sûr de ce cela ?' ;
        }
    }baccalaureat(moy)