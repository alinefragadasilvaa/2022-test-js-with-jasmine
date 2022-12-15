function criar(){
    const usuarios = ["brunoneves", "alinefraga", "barbararaupp", "rafaelamotta"];

let nome = "Marketing";
let descricao = "Aprendendo a cricar redes sociais";
let apelido = "alinefraga";

// campos obrigatórios em branco
// nome inválido
// descrição inválida
// apelido inválido 

// campos em branco
if (nome == ""){
    console.log("campos obrigatórios em branco!")
}

if (apelido == ""){
    console.log("campos obrigatórios em branco!")
}

// número de caracteres
if (nome.split('').length<4 || nome.split('').length>25){
    console.log("nome inválido")
}

if (descricao.split('').length<20 || descricao.split('').length>250){
    console.log("descrição inválida")
}

// validação do apelido
let aux = "não";
for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i] == apelido){
        aux = "sim"
    }
}
if (aux == "não"){
    console.log("apelido inválido")
}

}

criar();