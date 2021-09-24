function valida(){
    var nome = document.getElementById('nome');

    if (nome.value == ""){
        alert("Campo nome não pode estar em braco");
    }
    else {
        alert("Nenhum problema foi detectado. Seu formulário pode ser enviado com sucesso");
    }
}