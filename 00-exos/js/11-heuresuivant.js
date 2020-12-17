//pour la page HEURESUIVANT

let heure = parseInt(prompt("Entrez l'heure :"));
let minute = parseInt(prompt("Entrez les minutes :"));
let seconde = parseInt(prompt("Entrez les secondes")); 

if ((heure >= 0) && (heure <=23) && (minute >= 0) && (minute <= 59) && (seconde >= 0) && (seconde <=59)) {// conditions 
    seconde++;// on incrémente les seconde
        if (seconde === 60) {
            seconde = 0;
            minute++;
            if (minute === 60) {
                minute = 0;
                heure++;
                if (heure === 24) {
                    heure = 0;
                }
            }
        }
    console.log('il sera ' + heure + ' ' + minute + ' ' + seconde );
    document.getElementById('p1').innerHTML = 'Dans une seconde il sera ' + heure + ' h ' + minute + ' mn ' + seconde +' s.';
} else {
    document.getElementById('p1').innerHTML = 'Heure incorrecte';
}
