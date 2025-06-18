function calculaValorCredito() {
    let saldoMedio = parseFloat(document.getElementById("saldoMedio").value);
    document.getElementById("resultado").textContent;
    
    if (saldoMedio === null || isNaN(saldoMedio) || saldoMedio < 0) {
        document.getElementById("resultado").textContent = "Por favor, insira um valor válido.";
        return;
    }

    if (saldoMedio > 3001) {
        let resultado = saldoMedio + (saldoMedio * 0.5);
        document.getElementById("resultado").textContent = 'O valor do saldo médio é : R$ ' + saldoMedio.toFixed(2) +
            ' e o valor do crédito é: R$ ' + resultado.toFixed(2);
    } else if (saldoMedio >= 1001 && saldoMedio <= 3000) {
        let resultado = saldoMedio + (saldoMedio * 0.4);
        document.getElementById("resultado").textContent = 'O valor do saldo médio é : R$ ' + saldoMedio.toFixed(2) +
            ' e o valor do crédito é: R$ ' + resultado.toFixed(2);
    } else if (saldoMedio >= 501 && saldoMedio <= 1000) {
        let resultado = saldoMedio + (saldoMedio * 0.3);
        document.getElementById("resultado").textContent = 'O valor do saldo médio é : R$ ' + saldoMedio.toFixed(2) +
            ' e o valor do crédito é: R$ ' + resultado.toFixed(2);
    } else document.getElementById("resultado").textContent = 'O valor do saldo médio é : R$ ' + saldoMedio.toFixed(2) + '. Não há crédito disponível para este valor.';

    document.getElementById("saldoMedio").value = "";
}