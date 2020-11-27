//page de 06- jour suivant
let jourSuivant = "";
let jourActuel = prompt('1- Quel jour sommes nous ? (avec un if)');


//avec un if
if (jourActuel === "lundi") {
document.getElementById('p1').innerHTML = jourSuivant + ' Demain nous serons mardi';
} else if (jourActuel === "mardi") {
document.getElementById('p1').innerHTML = jourSuivant + ' Demain nous serons mercredi';
} else if (jourActuel === "mercredi") {
document.getElementById('p1').innerHTML = jourSuivant + ' Demain nous serons jeudi';
} else if (jourActuel === "jeudi") {
document.getElementById('p1').innerHTML = jourSuivant + ' Demain nous serons vendredi';
} else if (jourActuel === "vendredi") {
document.getElementById('p1').innerHTML = jourSuivant + ' Demain nous serons samedi';
} else if (jourActuel === "samedi") {
document.getElementById('p1').innerHTML = jourSuivant + ' Demain nous serons dimanche';
} else if (jourActuel === "dimanche") {
document.getElementById('p1').innerHTML = jourSuivant + ' Demain nous serons lundi';

} else {
  let = document.getElementById('p1').innerHTML = ' Ce jour est inconnu !' + jourSuivant;
}

/*  */
document.getElementById('p-*').innerHTML = '**************';
/*  */
/* 

//avec un switch
// let jourActuel = "lundi";
let jourActuel = prompt('2- Quel jour sommes nous ? (avec un switch)');
switch (jourActuel) {
  case "lundi":
    document.getElementById('p2').innerHTML =  jourActuel + ' Demain nous serons mardi';
    break;
  case "mardi":
    document.getElementById('p2').innerHTML =  + ajourActuel + ' Demain nous serons mercredi';
    break;
  case "mercredi":
    document.getElementById('p2').innerHTML =  + ' Demain nous serons jeudi';
    break;
  case "jeudi":
    document.getElementById('p2').innerHTML = jourActuel + ' Demain nous serons vendredi';
    break;
  case "vendredi":
    document.getElementById('p2').innerHTML = jourActuel + ' Demain nous serons samedi';
    break;
  case "samedi":
    document.getElementById('p2').innerHTML = jourActuel + ' Demain nous serons dimanche';
    break;
  case "dimanche":
    document.getElementById('p2').innerHTML = jourActuel + ' Demain nous serons lundi';
    break;
  default:
} 

if (jourSuivant !== "") {
let = document.getElementById('p2').innerHTML = ' Ce jour est inconnu ! ' + jourSuivant;
 }  */