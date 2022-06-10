// let cpf = "00000000000"

// let array = Array.from(cpf)

// console.log(array.length)

        // OU

let cpf = "00000000000"
        
let array = Array.from(cpf)

console.log(cpf.length)

try{
    if(cpf.length != 11){
        throw "Tamanho do CPF inválido"
    }
    else{
        console.log("Tamanho do CPF válido")
    }
}catch(erro){
    console.log(erro)
}