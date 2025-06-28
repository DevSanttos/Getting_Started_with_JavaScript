function varificaParOuImpar() {
    const numero = parseInt(document.getElementById("txtNumero").value);

    if (isNaN(numero)) {
        document.getElementById("resultado").textContent = "Por favor, insira um número válido.";
        return;
    }

    if (numero % 2 === 0) {
        return document.getElementById("resultado").textContent = "O número " + numero + " é par.";
    } else {
        document.getElementById("resultado").textContent = "O número " + numero + " é ímpar.";
    }
}