let a = 50


try {
    console.log(a * b)

}catch(erro){
    if(erro instanceof ReferenceError){
        console.log("ERRO DE VARIÁVEL NÃO DECLARADA: ",erro)
    }else{
        console.log("Outro tipo de erro!")
    }
}