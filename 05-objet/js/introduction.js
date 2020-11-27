//JS pour l'introduction aux objets

// alert('coucou');
//icic on  a une variable-objet tout simplement un object
let utilisateur = {
    //nom, age, et email sont des propriétés de l'obet utilisateur
    nom : ['Victor', 'Hugo', 'Marie'],   //ici nous avons des propriétés qui sont dans un tableau, un "array"
    age : 2,
    email : 'totor@hugo.com',
    adresse : 'à Paris dans son avenue',


    //?une méthode un peu comme une fonction
    bonjour : function(){
    alert('J\'ai ' + this.age + ' ans mon prénom est ' + this.nom[0] + ' ' + this.nom[2] + ' ' + this.nom[1] + '.');
    }
}

// console.log(typeof utilisateur);
utilisateur.bonjour();

