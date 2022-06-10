
// try/catch: define um bloco para tratar o erro


let a = 0;
let b = 1;

try{

    // variável c não existe
    console.log(a+c)
}catch(e){
    // e: parâmetro com um objeto do tipo Error
    console.log("Erro")
}