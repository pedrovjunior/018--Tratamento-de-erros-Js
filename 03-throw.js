// try/catch: define um bloco para tratar o erro
// throw: permite lançar um erro customizado

let x
x=11

try {

    if(x<=10){
        console.log("Número aceito!")
    }else{
        throw "Erro! Número não aceito"
    }
}catch(erro){
    console.log(erro)
}