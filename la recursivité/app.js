function time (secondes) { //10

    if (secondes > 0){
        console.log(secondes);
        time(secondes - 01) //9

        //afficher 9
        //time(8)
            //afficher 8
            //time(7)
    } else{
        console.log(secondes);
    }
}

time(10);