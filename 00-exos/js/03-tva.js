//pour la page 03 - tva.html
let prix = prompt('Prix HT');
let info = document.getElementById('p1').innerHTML = 'Résultat : Prix ' + prix + ' € HT pour un total de ' +  prix * 1.20 + ' € TTC';

// document.write('<p>Résultat : Prix ' + prix + ' € HT pour un total de ' +  prix * 1.20 + '</p>');