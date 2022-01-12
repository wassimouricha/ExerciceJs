function sommes (chiffres) { 

    if (chiffres == 1){
   return 1;

    } 
    return chiffres + sommes(chiffres - 1);

    //retourner 2 + somme(1)
        //retoourner 1

        // 3 + 2 + 1 = 6
}

console.log(sommes(3)); 