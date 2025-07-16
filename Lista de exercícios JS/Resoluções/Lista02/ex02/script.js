function isNegative() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    const num5 = parseFloat(document.getElementById("num5").value);
    const result = document.getElementById("result");


    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        document.getElementById("result").innerText = "Por favor, insira números válidos.";
        return;
    }
    
    const numbers = [num1, num2, num3, num4, num5];
    
    let negativeCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeCount++;
        }
    }

    result.innerText = `Quantidade de números negativos: ${negativeCount}`;
}