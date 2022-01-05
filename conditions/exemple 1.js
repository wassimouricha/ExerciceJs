let heure = 11;

//heure == 11  est égale
//heure != 11 est différente
// heure > 11 supérieure
//heure < 11 inférieure
//heure <= 11 inférieure ou égale
//heure >= 11 infgérieure ou égale



if(heure < 12){
    console.log("c'est le matin");
 }
 else if (heure < 18) {
    console.log("c'est l'après midi");
 } 
 else {
        console.log("c'est la soirée");
}
    
// age
//-18 : vous n'etes pas majeur
// 18 et 20 : vous etes majeur en france 
// 21+ : vous etes majeur partout , à vous les casinos !


let age = 27 ;

if( age < 18){
    console.log("vous n'etes pas majeur");
} else if ( age < 21){
    console.log("vous etes majeur en france");
} else {
    console.log("vous etes majeur ,à vous les casinos ! ");
}