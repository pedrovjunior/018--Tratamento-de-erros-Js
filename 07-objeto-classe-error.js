const cpf = "000000000000"

try {
    if(cpf.length !=11){
        throw {
            "name" : "CPFTamanhoInválido",
            "message": "O tamanho do CPF é inválido"
        }
    }else{
        console.log("O Tamanho do CPF é válido")
    }

}catch(error) {
    console.log(error)
}