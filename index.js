function criar(){
    document.getElementById("mensagem_branco").innerHTML = "";
    document.getElementById("mensagem_nome").innerHTML = "";
    document.getElementById("mensagem_descricao").innerHTML = "";
    document.getElementById("mensagem_apelido").innerHTML = "";
    document.getElementById("mensagem_sucesso").innerHTML = "";

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

    let nome = document.getElementById("nome").value;
    let descricao = document.getElementById("descricao").value;
    let apelido = document.getElementById("apelido").value;

    let retorno_nome = "", retorno_descricao = "", retorno_apelido= "", retorno_branco = "";

    // campos em branco
    if (nome == ""){
       retorno_branco = "Campos obrigatórios em branco!"
    }

    if (apelido == ""){
        retorno_branco = "Campos obrigatórios em branco!"
    }

    // número de caracteres
    if (nome.length<4 || nome.length>50){
        retorno_nome = "Nome inválido"
    }


    if ( descricao.length<20 || descricao.length>250){
        if (descricao != ""){
            retorno_descricao = "Descrição inválida"
        }
    }


    // validação do apelido
    if (usuarios.includes(apelido)==false){
        retorno_apelido = "Apelido inválido"
    }

    // descrição com caractere especial
    if (descricao != ""){
        let verificador = false;

        for(let i = 0; i <= letras.length; i++){
            if(descricao.includes(letras[i])){
                verificador = true;
            }
        }
        if(verificador == false){
            retorno_descricao = "Descrição inválida"
        }
    }

    // testar se tem numero no nome
    for(let i = 0; i <= numeros.length; i++){
        if(nome.includes(numeros[i])){
            retorno_nome = "Nome inválido"
        }
    }


    if(retorno_apelido == "" && retorno_descricao == "" && retorno_nome ==""){
        document.getElementById("mensagem_sucesso").innerHTML = "Categoria criada com sucesso!"
    }
    if(retorno_branco != ""){
        document.getElementById("mensagem_branco").innerHTML = retorno_branco
    }
    else{
        if(retorno_nome != ""){document.getElementById("mensagem_nome").innerHTML = retorno_nome}
        if(retorno_descricao != ""){document.getElementById("mensagem_descricao").innerHTML = retorno_descricao}
        if(retorno_apelido != ""){document.getElementById("mensagem_apelido").innerHTML = retorno_apelido}
    }
}

