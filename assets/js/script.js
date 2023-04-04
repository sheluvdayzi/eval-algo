// -- 1 --
// Afficher les nombres de 1 à 10
// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }
// -- 2 --
// Afficher tous les nombres impairs entre 1 et 100
// let nb = 0;
// for(let i = 1; i <= 100; i = i+2){
//     nb = i;
//     console.log(nb);
// }

// -- 3 --
// Afficher la table de multiplication des 3
// let tb3 = 0;
// for(let i = 0; i <= 10; i++){
//     tb3 = i*3;
//     console.log(tb3);
// }

// -- 4 --
// Afficher toutes les tables de multiplication de 1 à 10

// let result = 0;
// for(let i = 0; i <= 10; i++){
//     let firstnb = i;
//     for(let i = 0; i <= 10; i++){
//         result = firstnb*i;
//         console.log(firstnb + '*' + i + '= ' + result);
//     }
// }

// -- 5 --
// Afficher toutes les tables de multiplication de 1 à 100

// let result = 0;
// for(let i = 0; i <= 100; i++){
//     let firstnb = i;
//     for(let i = 0; i <= 100; i++){
//         result = firstnb*i;
//         console.log(firstnb + '*' + i + '= ' + result);
//     }
// }

// -- 6 --
// Calculer l'addition des chiffres de 1 à 10
// let result = 0;
// for(let i = 0; i <= 10; i++){
//     result +=i;
//     console.log(result);
// }

// -- 7 --
// Calculer l'addition des chiffres de 1 à 100
// let result = 0;
// for(let i = 0; i <= 100; i++){
//     result +=i;
//     console.log(result);
// }

// -- 8 --
// Calculer l'addition des nombre pairs entre 10 et 30
// let a = 0;
// for(let i = 10; i <= 30; i++){
//     if(i%2 === 0){
//         a += i;
//     }
// }
// console.log(a);

// -- 9 --
// Créer une fonction qui convertit des Celsius en Fahrenheit
// let a = prompt('Degrés celcius ?')
// console.log((a * 9/5) + 32);

// -- 10 --
// Créer une fonction qui convertit n'importe quelle monnaie (avec le taux de change en paramètre) 
// let a = prompt('Donne un chiffre que tu aimerais convertir')
// let b = prompt('le tot de change ?');
// console.log(a/b);

// -- 11 --
// Calculer la somme de chiffres provenant d'un array
// let note = [1, 2, 3, 40];

// function addition(arr){
//     let res = 0;
//     for(let i = 0; i < arr.length; i++){
//         res += arr[i];
//         console.log(res);
//     }
//     return res;
// }
// console.log("Le resultat : " + addition(note));

// -- 12 --
// Calculer la moyenne de chiffres provenant d'un array
// let tableau = [0, 100];

// function moyenne(arr){
//     let res = 0;
//     for(let i = 0; i < arr.length; i++){
//         res += arr[i];
//     }
//     return res / arr.length;
// }
// console.log(moyenne(tableau));

// -- 13 --
// Créer une fonction qui prend en paramètre un array de nombres et renvoie un array contenant uniquement les nombres entiers positifs (ex : [10, -8, 99, -277] => [10, 99])
// let arr = [10, -8, 99, -277];
// function positif(arr){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(positif(arr));


// -- 14 --
// Créer une fonction qui renvoie le plus grand chiffre d'un array
// let arr = [1, 5, 3];
// function grand(arr){
//     let result = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > result){
//             result = arr[i];
//         }
//     }
//     return result;
// }
// console.log(grand(arr));

// -- 15 --
// Afficher les 100 premiers nombres premiers

// let nbr, i, j;
// for (i = 2; i <= 100; i++){
//     nbr = 0;
//     for (j = 1; j <= (Math.sqrt(i)); j++){
//         if (i % j == 0) {nbr += 1;
//         }
//     } //--- for j ---
//     if (nbr == 1){console.log(i);
//     }
// }


// -- 17 --
// Créer une fonction qui prend un array en paramètre et le renvoie classé à l'envers
// let arr = ['ok', 'maison', 'nul'];

// function inverse(arr){
//     let res = [];
//     res = arr.reverse();
//     return arr;
// }
// console.log(inverse(arr));

// -- 18 --
// Créer une fonction qui prend une string en paramètre et la renvoie à l'envers
// function reverseString(str) {
//     let splitString = str.split(""); 
//     // ["h", "e", "l", "l", "o"]

//     let reverseArray = splitString.reverse();
//     // ["o", "l", "l", "e", "h"]
//     let joinArray = reverseArray.join("");
//     // "olleh"
//     return joinArray; // "olleh"
// }
// console.log(reverseString("hello"));

// -- 19 --
// Crée une fonction qui prend deux arrays en paramètres et renvoie un seul tableau contenant les deux tableaux fusionnés

// let array1 = ['a', 'b', 'c'];
// let array2 = ['d', 'e', 'f'];

// function fusion(arr1, arr2){
//     let array3 = arr1.concat(arr2);
//     return array3;
// }
// console.log(fusion(array1, array2));


// -- 20 --
// Créer une fonction qui prend deux arrays en paramètres et renvoie un seul tableau contenant les deux tableaux fusionnés sans répéter les doublons (ex : [10, -8, 99, -277] [77, 12, -8, 775] => [10, -8, 99, -277, 77, 12, 775])
// let arr1 = [10, -8, 99, -277];
// let arr2 = [77, 12, -8, 775];

// function croissant(arr1, arr2){
//     let arr3 = arr1.concat(arr2);
//     let arrfinal = [...new Set(arr3)];
//     return arrfinal;
// }
// console.log(croissant(arr1, arr2));

// -- 21 --
// Créer une fonction qui prend deux arrays en paramètres et renvoie un seul tableau contenant les deux tableaux fusionnés classés dans l'ordre croissant
// let arr1 = [1, 3, 2, 9, 6];
// let arr2 = [8, 5, 7, 4];

// function croissant(arr1, arr2){
//     let arr3 = arr1.concat(arr2);
//     arr3.sort();
//     return arr3;
// }
// console.log(croissant(arr1, arr2));

// -- 22 --
// Créer une fonction qui prend deux arrays en paramètres et renvoie un seul tableau contenant les deux tableaux fusionnés classés dans l'ordre croissant et sans répéter les doublons (exo 21 amélioré)

// let arr1 = [1, 3, 2, 9, 6];
// let arr2 = [8, 5, 9, 7, 4, 4];

// function croissant(arr1, arr2){
//     let arr3 = arr1.concat(arr2);
//     arr3.sort();
//     let arrfinal = [...new Set(arr3)];
//     return arrfinal;
// }
// console.log(croissant(arr1, arr2));

// -- 23 --
// Créer une fonction qui compte le nombre de mots dans un texte
// function compteMots(text, sep) {
//     sep = sep || ' ';
//     let count = 0, onWord = false;
//     for (const c of text){
//         if (sep.includes(c)){ 
//             onWord = false;
//         }
//         else if (!onWord){
//             onWord = true;
//             count++;
//         }
//     }
//     return count;
// }
// console.log(compteMots('je kiff le sport, surtout la boxe'));

// -- 24 --
// Créer une fonction qui met la première lettre de chaque mot d'un texte en majuscules
// let str = 'je suis du chocolat dans un arbre';

// function firstWordMaj(str){
//     let res = str.split(' ');
//     let result = [];
//     for(let i = 0; i < res.length; i++){
//         // console.log(res[i].charAt(0).toUpperCase());
//         result.push(res[i].charAt(0).toUpperCase() + res[i].substring(1));
//     }
//     return result.join(' ');
// }
// console.log(firstWordMaj(str));

// -- 25 --
// Créer une fonction qui convertit un texte en un array de caractères
// let str = 'je suis trop fort';
// function arrCaractere(str){
//     let res = '';
//     res = str.split("");
//     return res;
// }
// console.log(arrCaractere(str));

// -- 26 --
// Créer une fonction qui convertit un texte en un array de mots
// let str = 'je suis trop fort';
// function arrWord(str){
//     let res = '';
//     res = str.split(" ");
//     return res;
// }
// console.log(arrWord(str));

// -- 27 --
// Créer une fonction qui compte le nombre de fois un caractère passé en argument est trouvé dans une string lui aussi passé en argument

// let str = prompt('choisi un mot/phrase');
// let choice = prompt('Choisi un carractère pour que je te dise combien elle est repeter dans le/la mot/phrase : ' + str);

// function counter(str, ch){
//     let count = str.split(ch).length - 1;
//     return 'il y a ' + count + ' fois ce carractère dans le/la mot/phrase : ' + str;
// }
// console.log(counter(str, choice));

// -- 28 --
// Créer une fonction qui compte pour chaque lettre d'un texte le nombre de fois où elle se répète, la fonction renvoie un array dont chaque sous-array contient 2 informations : la lettre et son occurence
// ex : 'Bonjour il fait beau' => [['b', 2], ['o', 2], ['n', 1], ... ]

// function stringcount(str, tolower = false) {
//     let count = [];
//     let len = str.length;
//     if(tolower === true){
//         str = str.toLowerCase();
//     }
//     for (let i = 0; i < len; i++) {
//         let char = str.charAt(i);
//         if (count[char]) {
//             count[char]++;
//             // console.log(char);
//         } 
//         else {
//             count[char] = 1;
//             // console.log(char);
//         }
//     }
//     return count;
// }
// console.log(stringcount('Bonjour il fait beau', true));

// -- 29 --
// Créer une fonction pour calculer le diamètre d'un cercle (diamètre = rayon x 2)
// let rayon = prompt('Veuillez renseignez le rayon');
// function diametre(rayon){
//     let diametre = rayon * 2;
//     return 'Le diamètre = ' + diametre;
// }
// console.log(diametre(rayon));

// -- 30 --
// J'ai 1000€ sur mon compte bancaire.
// Tous les 2 mois, je mets 55€ de côté.
// Combien de temps faut-il pour que j'ai 5000€ sur mon compte ?
// Afficher le résultat en détaillant les 4 informations suivantes :
// (1) nombre de mois nécessaires
// (2) nombre d'années' nécessaires
// (3) nombre de semaines nécessaires
// (4) nombre de versements nécessaires
// let wallet = 1000;
// let month = 0;
// while (wallet < 5000) {
//     month += 2;
//     wallet += 55;
// }
// console.log(month, "mois nécessaires");
// console.log(month / 12, "années nécessaires");
// console.log(month * 4.348, "semaines nécessaires");
// console.log(month / 2, "versements nécessaires");


// Mot de la fin : Sans la doc j'aurais eu 0...