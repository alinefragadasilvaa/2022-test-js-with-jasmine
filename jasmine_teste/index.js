function criar(){
    const usuarios = ["brunoneves", "alinefraga", "barbararaupp", "rafaelamotta"];

let nome = document.getElementById("nome").value;
let descricao = document.getElementById("descricao").value;
let apelido = document.getElementById("apelido").value;

// campos obrigatórios em branco
// nome inválido
// descrição inválida
// apelido inválido 

if (nome == ""){
    document.getElementById("mensagem").innerHTML = "campos obrigatórios em branco!"
}

if (apelido == ""){
    document.getElementById("mensagem").innerHTML = "campos obrigatórios em branco!"
}

if (nome.split('').length<4 || nome.split('').length>25){
    document.getElementById("mensagem").innerHTML = "nome inválido!"
}

if (descricao.split('').length<20 || nome.split('').length>250){
    document.getElementById("mensagem").innerHTML = "descrição inválida!"
}




}

