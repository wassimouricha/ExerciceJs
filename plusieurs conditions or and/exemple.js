let gareDeDepart = "valenciennes";
let gareDeArrivee = "";
let chauffeur = "go";

//&& javascript comprend que la condition à plusieurs vérifications 
// ici js comprend que ma variable doit etre différent de null ""
// || ici js comprend que ma condition prend une des vérifications 
if((gareDeDepart != "" || gareDeArrivee != "") && chauffeur !="") {

        console.log('le train va demarrer');
    
} else {

    console.log('le train ne peut pas démarrer');
}