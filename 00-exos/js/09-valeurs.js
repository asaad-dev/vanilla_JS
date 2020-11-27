//page 09 - valeurs


var nb1 = parseInt(prompt('Entrez le nombre 1'));
var nb2 = parseInt(prompt('Entrez le nombre 2'));
var nb3 = parseInt(prompt('Entrez le nombre 3'));

if(nb1 > nb2) {
    nb1 = nb2 * 2;
} else {
    nb1++;
    if(nb2 > nb3){
        nb1 = nb1 + nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}
document.getElementById('p1').innerHTML = nb1 ;
document.getElementById('p2').innerHTML = nb2 ;
document.getElementById('p3').innerHTML = nb3 ;


