// -- 1 --
// Afficher les nombres de 1 à 10

//     // Variable qui stock mon resultat
// let res = ''; 
//     // Boucle qui parcours les chiffres de 1 a 10
// for(let i = 0; i <= 10; i ++){
//     res += i;
// }
//     // Afficher le res dans ma console
// console.log(res);


// -- 2 --
// Afficher tous les nombres impairs entre 1 et 100

//     // Variable pour stock mon resultat
// let res = '';
//     // Boucle qui parcours les chiffres de 1 a 100
// for(let i = 0; i <= 100; i++){
//         // Condition pour savoir si c'est impaire
//     if(i % 2 == 1){
//         res += i;
//     }
// }
//     // Affichermon resultat dans la console
// console.log(res);

// -- 3 --
// Afficher la table de multiplication des 3

//     // Variable qui stock 3 pour le multiplier
// let trois = 3;
//     // Boucle qui parcours les chiffres de 1 a 10 pour les multiplier a 3
// for(let i = 1; i <= 10; i++){
//         // A chaque tour de boucle, afficher mon resultat
//     console.log(trois + ' * ' + i + ' = ' + trois * i);
// }


// -- 4 --
// Afficher toutes les tables de multiplication de 1 à 10

//     // Boucle allant de 1 à 10
// for(let i = 1; i <= 10; i++){
//         // Deuxieme boucle allant de 1 à 10
//     for(let j = 1; j <= 10; j++){
//             // Afficher toutes mes tables
//         console.log(i + ' * ' + j + ' = ' + i * j);
//     }
// }


// -- 5 --
// Afficher toutes les tables de multiplication de 1 à 100

//     // Boucle allant de 1 à 100
// for(let i = 1; i <= 100; i++){
//         // Deuxieme boucle allant de 1 à 10
//     for(let j = 1; j <= 10; j++){
//             // Afficher toutes mes tables
//         console.log(i + ' * ' + j + ' = ' + i * j);
//     }
// }


// -- 6 --
// Calculer l'addition des chiffres de 1 à 10

//     // Variable qui stock mon resultat
// let res = 0;
//     // Boucle qui parcours tout les chiffres de 1 à 10
// for(let i = 1; i <= 10; i ++){
//         // Additionner i a res a chaque tour de boucle
//     res += i;
// }
//     // Afficher mon resultat
// console.log(res);


// -- 7 --
// Calculer l'addition des chiffres de 1 à 100

//     // Variable qui stock mon resultat
// let res = 0;
//     // Boucle qui parcours tout les chiffres de 1 à 10
// for(let i = 1; i <= 100; i ++){
//         // Additionner i a res a chaque tour de boucle
//         res += i
// }
//     // Afficher mon resultat
// console.log(res);


// -- 8 --
// Calculer l'addition des nombre pairs entre 10 et 30

//     // Variable qui stock mon resultat
// let res = 0;
//     // Boucle qui parcours les chiffres de 10 à 30
// for(let i = 10; i <= 30; i++){
//         // Si le chiffre est pair
//     if(i % 2 == 0){
//             // Additionner chaque chiffre paire a res
//         res += i;
//     }
// }
//     // Afficher mon resultat
// console.log(res);


// -- 9 --
// Créer une fonction qui convertit des Celsius en Fahrenheit

//     // Crée une fonction
// function convertisseur(celsius){
//         // Variable qui stock le calcul pour la convertion
//     let res = (celsius * 9/5) + 32;
//         // Afficher mon resultat
//     return '(' + celsius + '°C ' + '* ' + '9' + '/' + '5)' + ' = ' + res;
// }
//     // Afficher ma fonction
// console.log(convertisseur(5));



// -- 10 --
// Créer une fonction qui convertit n'importe quelle monnaie (avec le taux de change en paramètre) 

//     // Crée une fonction
// function convertionMonnaie(nb, tauxChange){
//         // Afficher mon resultat
//     return nb * tauxChange;
// }
//     // Afficher ma fonction
// console.log(convertionMonnaie(5, 1.09));


// -- 11 --
// Calculer la somme de chiffres provenant d'un array

//     // Varibale qui stock mon tableau
// let arr = [1, 2, 3];
//     // Variable pour stocker mon resultat
// let res = 0;
//     // Boucle qui parcours mon tableau 
// for(let i = 0; i < arr.length; i++){
//         // Additionner chaque nb de mon tableau
//     res += arr[i];
// }
//     // Afficher mon reslutat
// console.log(res);


// -- 12 --
// Calculer la moyenne de chiffres provenant d'un array

//     // array dans lequel on veut calculer la moyenne
// let arr = [0, 100];
//     // Stock le resultat de l'addition de tout les nb de l'array
// let res = 0;
//     // Boucle qui parcours mon array
// for(let i = 0; i < arr.length; i++){
//     res += arr[i];
// }
//     // Afficher res diviser par la longueur du tableau qui nous donne la moyenne 
// console.log(res / arr.length);



// -- 13 --
// Créer une fonction qui prend en paramètre un array de nombres et renvoie un array contenant uniquement les nombres entiers positifs (ex : [10, -8, 99, -277] => [10, 99])

//     // Crée une fonction
// function onlyPositive(arr){
//         // Variable vide qui permettra de stocker mon resultat
//     let arrFinal = [];
//         // Boucle qui parcours mon tableau
//     for(let i = 0; i < arr.length; i++){
//             // Si l'element de la boucle est un nb positif
//         if(arr[i] >= 0){
//                 // Push l'element dans mon nouveau tableau
//             arrFinal.push(arr[i]);
//         }
//     }
//         // Afficher mon resultat
//     return arrFinal;
// }
//     // Afficher ma fonction
// console.log(onlyPositive([5, -5, 7, -7, 0]));

// -- 14 --
// Créer une fonction qui renvoie le plus grand chiffre d'un array

//     // Crée une fonction
// function biggestNb(arr){
//         // Afficher le plus grand nombre de l'array
//     return Math.max(...arr);
// }
//     // Afficher ma fonction
// console.log(biggestNb([5, 9, 35, -50]));

// -- 15 --
// Afficher les 100 premiers nombres premiers

//     // Boucle qui parcours les chiffres de 2 a 100
// for (let i = 2; i <= 100; i++){
//     let nbr = 0;
//         // Boucle parcourant les chiffres plus petit que la racine carré de i
//     for (let j = 1; j <= (Math.sqrt(i)); j++){
//             // Si le modulo est egale a 0
//         if (i % j == 0) {
//                 // Ajouter 1 a nbr
//             nbr += 1;
//         }
//     } 
//         // Condition qui verifie si nbr est egale a 1
//     if (nbr == 1){
//             // Afficher mon resultat
//         console.log(i);
//     }
// }


// -- 17 --
// Créer une fonction qui prend un array en paramètre et le renvoie classé à l'envers

//     // Crée une fonction
// function inverse(arr){
//         // Afficher mon tableau a l'envers 
//     return arr.reverse();
// }
//     // Afficher ma fonction
// console.log(inverse([5, 6, 'okokok']));


// -- 18 --
// Créer une fonction qui prend une string en paramètre et la renvoie à l'envers

//     // Crée une fonction
// function strInverse(txt){
//         // Variable qui stock le split mon text qui le transforme en array
//     let arrTxt = txt.split('');
//         // Variable qui stocke l'inversement de mon array
//     let inverseArrTxt = arrTxt.reverse();
//         // Afficher une string au lieu du tableau
//     return inverseArrTxt.join('');
// }
//     // Afficher ma fonction
// console.log(strInverse('ok super'));


// -- 19 --
// Crée une fonction qui prend deux arrays en paramètres et renvoie un seul tableau contenant les deux tableaux fusionnés

//     // Crée une fonction
// function onlyOneArr(arr1, arr2){
//         // Utiliser concat qui permet de fusionner deux array et le stocker dans une variable
//     let arr3 = arr1.concat(arr2);
//         // Afficher la variable qui stock les deux array fusionner
//     return arr3;
// }
//     // Afficher ma fonction
// console.log(onlyOneArr([1, 3, '1 et 3'], [2, 4, '2 et 4']));


// -- 20 --
// Créer une fonction qui prend deux arrays en paramètres et renvoie un seul tableau contenant les deux tableaux fusionnés sans répéter les doublons (ex : [10, -8, 99, -277] [77, 12, -8, 775] => [10, -8, 99, -277, 77, 12, 775])

//     // Crée une fonction
// function arrSansDouble(arr1, arr2){
//         // Fusionner les deux array avec concat et les stock dans la variable arr3
//     let arr3 = arr1.concat(arr2);
//         // Variable qui stocke le tableau sans doublons
//     let withoutDouble = [...new Set(arr3)];
//         // Afficher mon resultat
//     return withoutDouble;
// }
//     // Afficher ma fonction
// console.log(arrSansDouble([1, 2, 3], [2, 3, 4]));


// -- 21 --
// Créer une fonction qui prend deux arrays en paramètres et renvoie un seul tableau contenant les deux tableaux fusionnés classés dans l'ordre croissant

//     // Crée une fonction
// function croissantOneArr(arr1, arr2){
//         // Fusionner mes deux array et les stock dans une variable
//     let arr3 = arr1.concat(arr2);
//         // Variable qui stock mon array trier par ordre croissant
//     let croissantArr3 = arr3.sort(function(a, b){
//         return a - b;
//     });
//         // Afficher mon resultat
//     return croissantArr3;
// }
//     // Afficher ma fonction
// console.log(croissantOneArr([3, 1, 2], [0, 6]));


// -- 22 --
// Créer une fonction qui prend deux arrays en paramètres et renvoie un seul tableau contenant les deux tableaux fusionnés classés dans l'ordre croissant et sans répéter les doublons (exo 21 amélioré)

//     // Crée une fonction
//     function croissantOneArr(arr1, arr2){
//         // Fusionner mes deux array et les stock dans une variable
//     let arr3 = arr1.concat(arr2);
//         // Variable qui stock mon array trier par ordre croissant
//     let croissantArr3 = arr3.sort(function(a, b){
//         return a - b;
//     });
//         // Enlever les doublons 
//     let withoutDouble = [...new Set(croissantArr3)];
//         // Afficher mon resultat
//     return withoutDouble;
// }
//     // Afficher ma fonction
// console.log(croissantOneArr([3, 1, 2], [3, 4, 0, 6]));


// -- 23 --
// Créer une fonction qui compte le nombre de mots dans un texte

//     // Crée une fonction
// function nbWord(txt){
//         // Transform mon txt en array
//     let arrTxt = txt.split(' ');
//         // Afficher combien il y a de mots en fonction de la taille de l'array
//     return 'Il y a ' + arrTxt.length + ' mots dans ' + "'" +  txt + "'";
// }
//     // Afficher ma fonction
// console.log(nbWord("j'adore manger des gateaux"));


// -- 24 --
// Créer une fonction qui met la première lettre de chaque mot d'un texte en majuscules

//     // Crée une fonction
// function firstWordMaj(str){
//         // Transformer str en tableau
//     let res = str.split(' ');
//         // La ou je stockerais mon resultat
//     let result = [];
//         // Boucle qui parcours mon tableau
//     for(let i = 0; i < res.length; i++){
//             // Mettre en majuscule  avec toUpperCase() chaque premiere lettre en les selectonnant avec charAt()
//         result.push(res[i].charAt(0).toUpperCase() + res[i].substring(1));
//     }
//         // Afficher mon resultat
//     return result.join(' ');
// }
//     // Afficher ma fonction
// console.log(firstWordMaj('ok je suis un gentil'));


// -- 25 --
// Créer une fonction qui convertit un texte en un array de caractères

//     // Crée une fonction
// function convertionArr(txt){
//         // Variable qui stock mon txt sous forme d'array de carractere grace a split
//     let arrCaractere = txt.split('');
//         // Afficher mon resultat
//     return arrCaractere;
// }
//     // Afficher ma fonction
// console.log(convertionArr('bonjour le'));


// -- 26 --
// Créer une fonction qui convertit un texte en un array de mots

//     // Crée une fonction
// function arrWord(txt){
//         // Variable qui stock mon txt sous forme d'array de mots
//     let arrMots = txt.split(' ');
//         // Afficher mon resultat
//     return arrMots;
// }
//     // Afficher ma fonction
// console.log(arrWord('je suis un gentil'));

// -- 27 --
// Créer une fonction qui compte le nombre de fois un caractère passé en argument est trouvé dans une string lui aussi passé en argument

//     // Crée une fonction
// function nbCar(carractere, str){
//         // Compteur de carractere
//     let res = 0;
//         // Stocker str dans un variable et le transformer en tableau 
//     let arrStr = str.split('');
//         // Boucle qui parcours mon tableau
//     for(let i = 0; i < arrStr.length; i++){
//             // Si le carractere est egale a l'element auquel c'est le tour ([i]) 
//         if(arrStr[i] == carractere){
//                 // Ajouter 1 au compteur
//             res += 1;
//         }
//     }
//         // Afficher mon resultat
//     return res;
// }
//     // Afficher ma fonction
// console.log(nbCar('a', 'avion a la maison'));


// -- 28 --
// Créer une fonction qui compte pour chaque lettre d'un texte le nombre de fois où elle se répète, la fonction renvoie un array dont chaque sous-array contient 2 informations : la lettre et son occurence
// ex : 'Bonjour il fait beau' => [['b', 2], ['o', 2], ['n', 1], ... ]

//     // Crée une fonction
// function compterOccurrences(txt) {
//         // Variable qui stock mon txt split
//     let newArr = txt.split('');
//     let occurrences = {};
//     for (let element of newArr) {
//           if (occurrences[element]) {
//                 occurrences[element]++;
//           } else {
//                 occurrences[element] = 1;
//           }
//     }
//     return occurrences;
// }
// console.log(compterOccurrences('animal'));



// -- 29 --
// Créer une fonction pour calculer le diamètre d'un cercle (diamètre = rayon x 2)

//     // Crée une fonction
// function calcDiametre(rayon){
//         // Variable qui stock le calcul du diametre
//     let res = rayon * 2;
//         // Afficher mon resultat
//     return 'Le diametre est de ' + res;
// }
//     // Afficher ma fonction
// console.log(calcDiametre(5));



// -- 30 --
// J'ai 1000€ sur mon compte bancaire.
// Tous les 2 mois, je mets 55€ de côté.
// Combien de temps faut-il pour que j'ai 5000€ sur mon compte ?
// Afficher le résultat en détaillant les 4 informations suivantes :

// let compteBancaire = 1000;
// let mois = 0;
// while(compteBancaire < 5000){
//     compteBancaire += 55;
//     mois += 2;
// }
// // (1) nombre de mois nécessaires
// console.log(mois);
// // (2) nombre d'années' nécessaires
// console.log(mois / 12);
// // (3) nombre de semaines nécessaires
// console.log(mois / 4.348);
// // (4) nombre de versements nécessaires
// console.log(mois / 2);
