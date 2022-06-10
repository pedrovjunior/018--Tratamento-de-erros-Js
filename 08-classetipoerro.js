// criando uma classe de erro customizado herdado da classe Error
class ErroFormulario extends Error {
    // construtor de objeto da classe ErroFormulario
    constructor(message){
        // recebendo e sobrescrevendo a propriedade message com a mensagem de erro externa 
        super(message)
        // definindo o valor da propriedade name do objeto da classe  ErroFormulario
        this.name = "ErroFormulario"
    }
}

try{
    let nome = "Pedro"
    let idade = 25
    let profissao 

    if (!nome || idade == null || profissao == null) {
    
        // criando um novo objeto da classe  ErroFormulario, passando uma mensagem personalizada
        throw new ErroFormulario("Campos em branco não são permitidos")
    }
    else{
        console.log("Usuário válido!")
    }

// recebendo o erro to try
}catch(error){
    console.log(error)
}

// try/catch: define um bloco para tratar o erro
// throw: permite lançar um erro customizado