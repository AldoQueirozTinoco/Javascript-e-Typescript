const hora = 24
if(hora<12 && hora>0){
    console.log("Bom dia")
}else if (hora >= 12 && hora<=17){
    console.log("Boa tarde")
}else if(hora>17 && hora<=23){
    console.log("Boa noite")
}else{
    console.log("Hora invalida")
}
