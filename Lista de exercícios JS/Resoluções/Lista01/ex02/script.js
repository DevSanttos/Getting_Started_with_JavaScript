function calculaIMC() {
    let peso = parseFloat(document.getElementById("pesoInput").value);
    let altura = parseFloat(document.getElementById("alturaInput").value);

    if (isNaN(peso) || isNaN(altura)) {
        document.getElementById("resultado").textContent = "Por favor, insira valores numéricos válidos.";
        return;
    }

    if (altura <= 0) {
        document.getElementById("resultado").textContent = "Altura deve ser maior que zero.";
        return;
    }

    if (peso <= 0) {
        document.getElementById("resultado").textContent = "Peso deve ser maior que zero.";
        return;
    }

    let resultado = peso / (altura * altura);
    let classificacao = "";

    if (resultado < 18.5) {
        classificacao = "Magreza";
    } else if (resultado < 24.9) {
        classificacao = "Normal";
    } else if (resultado < 29.9) {
        classificacao = "Sobrepeso";
    } else if (resultado < 34.9) {
        classificacao = "Obesidade I";
    } else if (resultado < 39.9) {
        classificacao = "Obesidade II";
    } else {
        classificacao = "Obesidade III";
    }

    document.getElementById("resultado").textContent = 
        "Seu IMC é: " + resultado.toFixed(2) + " - Classificação: " + classificacao;
}