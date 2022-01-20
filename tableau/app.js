let monTableau = new Array ('un' , 'deux' , 'trois');
let monTableau =  Array ('un' , 'deux' , 'trois');
let monTableau = [ 'un' , 'deux ' , ' trois'];
//push permet d'ajouter un élément a la fin mon tableau 
//unshift permet d'ajouter un élément au debut de mon tableau
monTableau.push('cinq');
monTableau.unshift('zero');

console.log( monTableau );

/*ceci est l'ancienne façon de rediger un tableau à plusieur dimension */
let montableau3d = (
    Array('mark' , 'jeff' ,'bill'),
    Array('zuckerberg','bezos','gates' )
);

/* un tableau avec ub autre tableau à l'interieur est un tableau a plusieurs dimension */

let monTableau2d = [

[ 'mark','jeff' , 'bill'],
['zuckerberg','bezos','gates']

];

let monTableauAssociatif = {
'prenom' : 'Mark',
'nom' : 'Zuckerberg',
'poste' : 'PDG de Facebook'

};