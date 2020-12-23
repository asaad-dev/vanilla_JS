// alert('coucou');

let textarea = document.querySelector('#tweetContenu');
console.log(textarea);

let afficheTotal = document.querySelector('#compteur');
console.log(afficheTotal);

//la fonction va calculer la langueur de la chaîne de caractéres dans le texte-area
function compte() {
    let nbrCaracteres = 140 - textarea.value.length;
    afficheTotal.innerHTML = 'Il reste ' + nbrCaracteres + ' caractères';

    if(nbrCaracteres < 0) {
        // console.log(nbrCaracteres);
        afficheTotal.classList.remove("bg-warning");
        afficheTotal.classList.add("bg-danger", "text-white");
        afficheTotal.textContent = "Trop de caractères ! Vous devez en retirez " + nbrCaracteres;

        let nbrPositif = Math.abs(nbrCaracteres);

        afficheTotal.textContent = "Trop de caractères ! Vous devez en retirez " + nbrPositif;
    } else if (nbrCaracteres >= 0) {
        afficheTotal.classList.remove("bg-danger");
        afficheTotal.classList.add('bg-warning');
    } else {
        //sinon rien
    }

}//fin fonction

//on pose un écouteur d'événement avec keyUp sur le textarea
textarea.addEventListener('keyUp', compte);

//on appelle la fonction
compte();
