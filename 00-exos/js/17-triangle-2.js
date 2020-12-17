//pour la page TRIANGLE PYRAMID

let nbrLigne = 7;

for (var ligne = 0; ligne < nbrLigne; ligne++) {
    let etoiles = '';
    let espaces = '';

    //1ér for pour les espaces début de la ligne
    //sur la 1ére (qui aura une étoile) je place 6 espaces à gauche de l'étoile 1ére opération le nbr de ligne - l'étoile placée
    for (let col = 0; col < nbrLigne - (ligne + 1); col++)
    espaces += ' ';

    //2è for pour les étoiles 
    for(let col = 0; col < 2 * ligne + 1; col++) {
        etoiles +='*';
    }
    console.log(espaces + etoiles);
}
 

/////////////////////////////////////////
/* 
? avec fonction
*/
 function pyramide(n) {

    for(let i = 1; i <= n; i++){
      let str1 = ' '.repeat(n - i);
      let str2 = '*'. repeat(i * 2 - 1)
  
      console.log(str1 + str2);
    }
  
  }
  
  pyramide(7); //? invoking the function


/* 
? avec for
*/
  let n = 5;
  for(i = 1; i <= n; i++) {
    
    let star1 = ' '.repeat(n - i);
    let star2 = '*'.repeat(i * 2 - 1)
    console.log(star1 + star2);
  }
