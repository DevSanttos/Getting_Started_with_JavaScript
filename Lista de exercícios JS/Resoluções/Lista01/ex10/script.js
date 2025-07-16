function validarPeso() {
    var peso = parseFloat(document.getElementById("pesoPeixes").value);
    var mensagem = "";

    if (isNaN(peso)) {
        mensagem = "Por favor, insira um peso válido.";
        document.getElementById("resultado").innerText = mensagem;
        return;
    }

    if (peso < 0) {
        mensagem = "Peso inválido. O peso não pode ser negativo.";
        document.getElementById("resultado").innerText = mensagem;
        return;
    } else if (peso <= 500) {
        mensagem = "Sucesso! O peso está dentro da faixa legal presvista.";
    } else {
        mensagem = "Peso acima do máximo permitido. Valor da multa: R$ " + ((peso - 500) * 4).toFixed(2) + ".";
        
    }

    document.getElementById("resultado").innerText = mensagem;
}