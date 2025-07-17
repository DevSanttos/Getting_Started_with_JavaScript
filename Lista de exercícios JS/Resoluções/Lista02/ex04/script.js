function calculate() {
    const resultText = document.getElementById('result');
    const numbers = [];
    let maxNumber = 0;
    let minNumber = 0;
    let avgNumbers = 0;

    for (let i = 1; i <= 10; i++) {
        const num = parseFloat(document.getElementById(`num${i}`).value);
        
        if (isNaN(num)) {
            resultText.innerText = "";
            resultText.innerText = `Por favor, insira um número válido para a posição ${i}.`;
            return;
        }
        
        if (num < 0) {
            resultText.innerText = "";
            resultText.innerText = `Por favor, insira um número positivo para a posição ${i}.`;
            return;
        } else {
            if (num > maxNumber) {
                maxNumber = num;
            }
            if (minNumber === 0 || num < minNumber) {
                minNumber = num;
            }
            numbers.push(num);
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        avgNumbers += numbers[i];
    }
    avgNumbers /= numbers.length;

    resultText.innerText = "";
    resultText.innerText = `Maior valor: ${maxNumber}\n` +
                            `Menor valor: ${minNumber}\n` +
                            `Média dos números: ${avgNumbers.toFixed(2) }`;
}