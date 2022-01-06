try {
//il va chercher une erreur
alert(hello);
} 

catch(error){
// si il y a une erreur le block catch va s'executer 
alert("la variable hello n'existe pas ");
// console.error(error.stack)
}