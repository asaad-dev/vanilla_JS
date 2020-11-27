//valeurs de retour

function division(a,b) {//les paramétres (a,b)
    if(b == 0) {
        return 'Division par 0 impossible !';
    } else {
        // alert('attend je calcule !')
        return a / b;
        alert('Ce bloc de code ne s\'affichera pas !')//aprés le return plus rien ne se passe
    }//fin if else
}//fin function

// division(5,0);
// console.log(division(5,0));//Là je passe des arguments

let nbr1 = prompt('Entrez un premier nombre à diviser');
let nbr2 = prompt('Entrez un second qui divisera le premier');

// console.log(nbr1,nbr2);

let resultatDivision = division(nbr1,nbr2);//on utilise les variables en arguments
document.getElementById('p1').innerHTML = resultatDivision;