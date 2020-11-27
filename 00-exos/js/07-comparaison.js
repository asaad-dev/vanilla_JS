//page de 07 - comparaison
let nombre1 = parseInt(prompt('1er nombre'));   //si je mets parseInt je suis sûr que l'on attend un nombre
let nombre2 = parseInt(prompt('2éme nombre'));

if(nombre1 < nombre2) {
    document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est plus petit que votre 2éme nombre : ' + nombre2 + '.';
} else if(nombre1 > nombre2) {
    document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est plus grand que votre 2éme nombre : ' + nombre2 + '.';  
} else if(nombre1 === nombre2) {
    document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est égal à votre 2éme nombre: ' + nombre2 + '.';
} else {
    document.getElementById('p1').innerHTML = 'Vous n\'avez pas saisi de nombre(s)';
}



let nb1 = parseInt(prompt('1er nombre'));   //si je mets parseInt je suis sûr que l'on attend un nombre
let nb2 = parseInt(prompt('2éme nombre'));

if ( (!isNaN(nb1)) && (!isNaN(nb2)) ) {// utilisation de isNaN ; isNaN nous "ce n'est pas un nombre" ; !isNaN nous dit "c'est bien un nombre"
    if (nb1 < nb2) {// si nombre1 est inférieur
        document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est plus petit que votre 2nd : ' + nb2;
    } else if (nb1 > nb2) { // si il est supérieur
        document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est plus grand que votre 2nd : ' + nb2;
    } else {// sinon ils sont égaux
        document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est égal à votre 2nd : ' + nb2;
    } //fin if condition comparaison
    } else {
        document.getElementById('p1').innerHTML = 'Vous n\'avez pas saisi de nombre(s)';
    };







