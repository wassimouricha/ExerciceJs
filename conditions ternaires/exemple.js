let gareDeDepart = "valenciennes";
let gareDeArrivee = prompt("Où souhaitez-vous aller ?") || "Gare du nord";
let chauffeur = "Patrick";

if((gareDeDepart != "" || gareDeArrivee != "") && chauffeur !="") {

        alert('le train va demarrer à destination de ' + gareDeArrivee + '.');
    
} else {

    console.log('le train ne peut pas démarrer');
}

//conditions ternaires
// let x = 5;

// // [CONDITION]  ?  [TRUE] : [FALSE];

// x > 3 ?  console.log("x est supérieur à trois" ) : console.log("x est inférieur à trois") ;

// if( x > 3){
//     console.log("x est supérieur à trois");
// } else{
//     "x est inférieur à trois"
// }