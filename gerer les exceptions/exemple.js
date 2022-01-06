
    try {
        let recompense = prompt("choisissez une récompense : épée, arc, haches ")
        
        switch(recompense){
    
            case 'épée' :
                degats = 40;
                break;
            case 'arc' :
                degats = 30;
                break;
            case 'haches' :
                degats = 20;
                break;
                default: 
                    throw new Error('vous ne pouvez pas tricher. ');
        }
    
    alert('vous avez choisi : ' + recompense + '(' + degats + 'dégats).');
    
    
} 

catch(error){
    //erreur !
alert(error)
}
finally{
    alert('fin du programme');
}
