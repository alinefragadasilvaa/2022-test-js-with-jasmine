class CategoriaComunidade{

    constructor(nome, descricao, apelido){
        this.nome = nome;
        this.descricao =  descricao;
        this.apelido = apelido;
    }

    criar(){
        const usuarios = ["brunoneves", "alinefraga", "barbararaupp", "rafaelamotta"];

        const letras = [
            'a', 'b', 'c','d','ç', 'd', 'e', 'f', 'g',
            'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
            'q', 'r', 's', 't', 'u', 'v', 'x', 'y',
            'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
            'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
            'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
            'X', 'Y', 'Z', 'ã', 'Ã', 'õ', 'Õ', 'É',
            'é', 'É', 'é', 'Í', 'í', 'Ó', 'ó','Á', 
            'á' 
        ]
        const numeros = [
            '1', '2', '3', '4',
            '5', '6', '7', '8',
            '9', '0'
        ]

        let retorno_nome = "", retorno_descricao = "", retorno_apelido= "", retorno_branco = "", retorno_final;

        // campos em branco
        if (this.nome == ""){
        retorno_branco = "Campos obrigatórios em branco!"
        }

        if (this.apelido == ""){
            retorno_branco = "Campos obrigatórios em branco!"
        }

        // número de caracteres
        if (this.nome.length<4 || this.nome.length>50){
            retorno_nome = "Nome inválido"
        }


        if (this.descricao.length<20 || this.descricao.length>250){
            if (this.descricao != ""){
                retorno_descricao = "Descrição inválida"
            }
        }


        // validação do apelido
        if (usuarios.includes(this.apelido)==false){
            retorno_apelido = "Apelido inválido"
        }

        // descrição com caractere especial
        if (this.descricao != ""){
            let verificador = false;

            for(let i = 0; i <= letras.length; i++){
                if(this.descricao.includes(letras[i])){
                    verificador = true;
                }
            }
            if(verificador == false){
                retorno_descricao = "Descrição inválida"
            }
        }

        // testar se tem numero no nome
        for(let i = 0; i <= numeros.length; i++){
            if(this.nome.includes(numeros[i])){
                retorno_nome = "Nome inválido"
            }
        }


        if(retorno_apelido == "" && retorno_descricao == "" && retorno_nome =="" && retorno_branco == ""){
            return "Categoria criada com sucesso!"
        }
        if(retorno_branco != ""){
            return retorno_branco
        } else{
            return retorno_nome + ", " + retorno_descricao + ", " +  retorno_apelido
        }
    }
}


   
    

   
  
