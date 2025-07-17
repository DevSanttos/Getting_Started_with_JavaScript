function calculate() {
    const resultText = document.getElementById('result');
    const numbers = [];
    let positiveNumbers = [];
    let negativeNumbers = [];
    let avgPositiveNumbers = 0;
    let countNegativeNumbers = 0;
    let countIntervalNumbers = 0;

    for (let i = 1; i <= 10; i++) {
        const num = parseFloat(document.getElementById(`num${i}`).value);
        if (!isNaN(num)) {
            numbers.push(num);
        } else {
            resultText.innerText = "";
            resultText.innerText = `Por favor, insira um número válido para a posição ${i}.`;
            return;
        }
        
        if (num > 0) {
            positiveNumbers.push(num);
            if (num >= 5 && num <= 50) {
                countIntervalNumbers++;
            }
        } else {
            negativeNumbers.push(num);
        }
    }

    if (numbers.length !== 10) {
        resultText.innerText = "Por favor, insira exatamente 10 números.";
        return;
    }

    if(positiveNumbers.length > 0) {
        for (let i = 0; i < positiveNumbers.length; i++) {
            avgPositiveNumbers += positiveNumbers[i];
        }
        avgPositiveNumbers /= positiveNumbers.length;
    }

    if(negativeNumbers.length > 0) {
        countNegativeNumbers = negativeNumbers.length;
    }
    
    resultText.innerText = "";
    resultText.innerText = `Média dos valores positivos: ${avgPositiveNumbers.toFixed(2)}\n` +
                            `Quantidade de números negativos: ${countNegativeNumbers}\n` +
                            `Quantidade de números no intervalo de 5 a 50: ${countIntervalNumbers}`;
}