const form = document.getElementById('form')
const nome = document.getElementById('nome')
const propietario = document.getElementById('propietario')
const cep = document.getElementById('cep')
const endereço = document.getElementById('endereço')
const cidade = document.getElementById('cidade')
const uf = document.getElementById('uf')
const raça = document.getElementById('raça')
const telefone = document.getElementById('telefone')
const nascimento = document.getElementById('nascimento')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkinpults();

})

function checkinpults(){
    const nomeValue = nome.value
    const propietarioValue = propietario.value
    const cepValue = cep.value
    const endereçoValue = endereço.value
    const cidadeValue = cidade.value
    const ufValue = uf.value
    const raçaValue = raça.value
    const telefoneValue = telefone.value
    const nascimentoValue = nascimento.value

if (nomeValue === ""){
    setErrorFor(nome);
}else {
    setSuccessFor(nome);
}

}
function setErrorFor(input) {
    const caixaform = input.parentElementet;
    caixaform.className = "caixaform error";
}
function setSuccessFor(input){
    const caixaform = input.parentElementet;
    caixaform.className ="caixaform success";
}

