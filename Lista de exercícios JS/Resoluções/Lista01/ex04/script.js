function verificarClasseEleitoral() {
    const idade = parseInt(document.getElementById("idade").value);
    let resultado = document.getElementById("resultado");
    if (isNaN(idade) || idade < 0) {
        return document.getElementById("resultado").textContent = "Por favor, insira uma idade válida.";
    }

    if(idade < 16) {
        return resultado.textContent = "Não eleitor.";
    } else if(idade >= 18 && idade <= 65) {
        return resultado.textContent = "Eleitor obrigatório.";
    } else {
        return resultado.textContent = "Eleitor facultativo.";
    }
}