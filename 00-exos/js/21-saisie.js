// alert('coucou');

'use strict';

 let votreSaisie;
 // console.log(typeof votreSaisie, votreSaisie);

 do {
     votreSaisie = parseFloat(prompt('Merci de saisir un nombre entier ou décimal.'))

 } while (isNaN(votreSaisie) == true) || votreSaisie === 0;
 document.getElementById('p1').innerHTML = 'Vous avez bien saisi le nombre suivant ' + votreSaisie + ' (c\'est bien un nombre).';

// console.log(typeof votreSaisie, votreSaisie);


let utilisateurPrompt = prompt('avec if else');

        //  let regex = /([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}/;
        if (utilisateurPrompt.includes('a') || utilisateurPrompt.includes('b') || utilisateurPrompt.includes('c') || utilisateurPrompt.includes('d') || utilisateurPrompt.includes('e') || utilisateurPrompt.includes('f') || utilisateurPrompt.includes('g') || utilisateurPrompt.includes('h') || utilisateurPrompt.includes('i') || utilisateurPrompt.includes('j') || utilisateurPrompt.includes('k') || utilisateurPrompt.includes('l') || utilisateurPrompt.includes('m') || utilisateurPrompt.includes('n') || utilisateurPrompt.includes('o') || utilisateurPrompt.includes('p') || utilisateurPrompt.includes('q') || utilisateurPrompt.includes('r') || utilisateurPrompt.includes('s') || utilisateurPrompt.includes('t') || utilisateurPrompt.includes('u') || utilisateurPrompt.includes('v') || utilisateurPrompt.includes('w') || utilisateurPrompt.includes('x') || utilisateurPrompt.includes('y') || utilisateurPrompt.includes('z')) {
            document.getElementById('p1').innerHTML = 'Incorrect';
            // document.write('Incorrect');
        } else if (utilisateurPrompt.includes('.')) {
            utilisateurPrompt = utilisateurPrompt.replace('.', ',');
            document.getElementById('p1').innerHTML = 'Votre nombre est : ' + utilisateurPrompt;
            // document.write('Votre nombre est : ' + utilisateurPrompt);
        } else {
            document.getElementById('p1').innerHTML = 'Votre nombre est : ' + utilisateurPrompt;
        //    document.write('Votre nombre est : ' + utilisateurPrompt);
        }


























/*  function askNumber() {
    while (true){
       number = parseInt(prompt("Choississez un nombre entier"));
       if (number) {
       return number;
       }
    }
} 

 document.getElementById('p1').innerHTML = 'Vous avez bien saisi un nombre : le nombre ' + askNumber();

 */

