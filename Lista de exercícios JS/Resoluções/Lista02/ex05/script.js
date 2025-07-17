function calculate() {
    const resultText = document.getElementById('result');
    let primeNumbers = [];

    for (let i = 1; i <= 5; i++) {
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
            const squareRoot = parseInt(Math.sqrt(num));
            let revCounter = 0;
            
            if (num === 0 || num === 1) {
                resultText.innerText = "";
                resultText.innerText = `O número ${num} não é primo.`;
                return;
            }

            for (let i = 2; i <= squareRoot; i++) {
                if (num % i === 0) {
                    break;
                }
                revCounter++;
            }

            if (revCounter === squareRoot - 1) {
                primeNumbers.push(num);
            }
        }
    }

    if (primeNumbers.length === 0) {
        resultText.innerText = "Nenhum número primo encontrado.";
    } else {
        resultText.innerText = `Os números primos são: ${primeNumbers.join(", ")}.`;
    }
}