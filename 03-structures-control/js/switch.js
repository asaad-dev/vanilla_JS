//page switch

let x = 15;

switch(x) {//on va switcher sur la variable
    case 2://un des 'cas' possible ou une des 'issues
        document.getElementById('p1').innerHTML = 'x stocke la valeur 2'
        break;//break ne pas oublier le break ! là il sort du switch si le cas est vari
    case 5:
        document.getElementById('p1').innerHTML = 'x stocke la valeur 5'
        break;
    case 10:
        document.getElementById('p1').innerHTML = 'x stocke la valeur 10'
        break;
    case 15:
        document.getElementById('p1').innerHTML = 'x stocke la valeur 15'
        break;
    case 20:
        document.getElementById('p1').innerHTML = 'x stocke la valeur 20'
        break;

    default:// aprés default il sortira naturellement
        document.getElementById('p1').innerHTML ='x ne contient ni 2, ni 5, ni 10, ni 15, ni 20';
}