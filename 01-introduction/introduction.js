//Mon premier fichier.js - Asaad Colombbus
//ce fichier est lié à la page 01-04-introduction.html

//un commentaire monoligne

/*
un commentaire multiligne
en JS
*/
/*MAJ + ALT + A */

let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');

bonjour.addEventListener('click', popup);
ajouter.addEventListener('click', ajout);

function popup() {
    alert('Bonjour je suis une fenêtre d\'alerte !');
}

function ajouter() {
    let para = document.createElement('p');
    para.textContent = 'Paragraphe ajouté';
    document.body.appendChild(para);
}
let age = 33;
if(age <= 30) {
//if the value of age is less than or equal to 30
}
else if(age > 30 && < 40) {
    //if age is greater than 40
    //&& - AND
    // || OR
}
else if(age < 0) {
//otherwise prevent something from happening
}
else {
    //greater than 40
}