//pour la ni oui ni non

var disMoi = '';    //initialisation de la variable avec une string vide, on y rentrera la réponse de l'utilisateur
console.log(typeof disMoi, disMoi);
let i =1;

//tant que le prompt ne contient pas oui Et ne contient pas non, boucle
while ((disMoi !== 'oui') && (disMoi !== 'non')) {
    disMoi = prompt('On nuit au ni oui ni non ?? Allez !');
    i++;    //une boucle a besion de nombre de tours
}

document.getElementById('p1')
