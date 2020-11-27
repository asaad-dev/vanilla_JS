//page 04-05-conclusion.html

//on va créer une fonction anonyme

// function() {
//     alert('Alerte exécutée par une fonction anonyme');
// }

//comment appeler ma fonction si ellen'a pas de nom ?
//je le passe en variable
let alerte = function() {
    alert('Alerte exécutée par une fonction anonyme');
}
//toujours "appeler" la fonction anonyme sinon erreur dans la poursuite du script
alerte();

// function () {
//     alert('Alerte !!! Seconde exécution d\'une fonction anonyme ');
// }

(function () {
    alert('Alerte !!! Seconde exécution d\'une fonction anonyme ');
}());
// (on met la fonction dans ce couple de parenthéses(); suivie d'un couple de parenthéses)

// Les fonctions auto-invoquées (self-invoked functions en anglais) vont être des fonctions qui vont s'appeler elles-mêmes. Pour créer une fonction auto-invoquée à partir d'une fonction, il va tout simplement falloir rajouter un couple de parenthèses autour de la fonction et un second après le code de la fonction.

//au déclenchement d'un événement

// function() {
//     alert('Et ! Tu as bien cliqué sur le paragraphe 1 !');
// }

let paragraphe1 = document.getElementById('p1');

paragraphe1.addEventListener('click', function() {
    alert('Et ! Tu as bien cliqué sur le paragraphe 1 !');
});

let paragraphe2 = document.getElementById('p2');
paragraphe2.addEventListener('click', function() {
    alert('Et ! Tu as bien cliqué sur le paragraphe 1 !');
});

//fonction récursive

function decompte(t) {
    if(t > 5) {
        document.getElementById('p3').innerHTML += t + '<br>';
        return decompte(t - 1);
    } else {
        return t;
    }//fin if else
}//fin function

decompte(15);