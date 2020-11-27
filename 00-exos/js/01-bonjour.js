//script pour la page 01 - bonjour.html
let nom = prompt('Entre votre nom :');
let prenom = prompt('Entre votre prénom :');
alert('Bonjour, ' + nom +  ' ' + prenom);


//TODO: Variable
  //EXERCICE 1 - Délaration variables
        //num qui contient le nombre 255
        //txt qui contient ta chaîne de caractéres 255
        //bin (pour binaire) qui contient la valeur booléen varie
        //flt (pour float) qui contient la valeur 7,23
        
        let num = 255;
        let txt = '255';
        let bin = true;
        let flt = 7.23;

        //affichez les variables dans des console.log
        console.log(num, txt, bin, flt);
        
        //EXERCICE 2
        //Appliquez à une l'opérateur d'incrémentation (ce qui doit donner 256)
        //Concaténez à la chaîne txt la chaîne suivante : " est ici une chaîne de caractéres."
        //Inversez la valeur longique de bin
        //Ajoutez à flt la valeur contienue dans num

        num++;
        console.log(num);
        console.log(txt + " est ici une chaîne de caractéres.");
        //bin = flase;
        //bin2 = true;
        //bin2 = !bin2
        bin = ! true;
        console.log(bin);

        flt = flt + num;
        flt += num;
        console.log(num,txt,bin,flt);

        //EXERCEICE 3
        //num2 qui contient le nombre 23
        //txt2 qui contient la chaîne de caractére 33
        //Affichez le résultat de num2 + txt2 avec console.log()
        //Affichez le résultat de num2 + txt2

        let num2 = 23;
        let txt2 = '33';
        console.log(num2 + txt2);

        //on ne peut pas additionner une string et un numbre !

        //1- Il ne faut pas faire des opérations avec des variables de types différents
        //2- Si on veut le faire il faut écrire les conversions dans le programme
        //3- JS est typé, précis

        //EXERCICE 4
        //avec num2 et txt2 
        //on ajoute une variable qui contient 0
        //convertir la chaîne contenue dans txt2 en numbre avec parseInt() et mettre le résultat dans tmp 
        //Ajouter à num2 le ccontenu de tmp
        
        var nbr1 = 22;
        var lettres = '18';


        let tmp = 0;//cette variable est de type number, je lui affecte la valeur à zéro car aprés elle me sert à changer un string en number
        console.log(tmp);

        tmp = parseInt(txt2);//INT = integer (entier)
        console.log(num2 + tmp);

        tmp = parseInt(txt);
        console.log(num2 + tmp);