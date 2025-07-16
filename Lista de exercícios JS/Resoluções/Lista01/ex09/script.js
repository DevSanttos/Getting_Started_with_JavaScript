function calculaValoresMaioresQueMedia() {
    const number1 = parseInt(document.getElementById("num1").value);
    const number2 = parseInt(document.getElementById("num2").value);
    const number3 = parseInt(document.getElementById("num3").value);
    const number4 = parseInt(document.getElementById("num4").value);
    const number5 = parseInt(document.getElementById("num5").value);

    if (number1 < 0 || number2 < 0 || number3 < 0 || number4 < 0 || number5 < 0) {
        document.getElementById("result").textContent = "Por favor, insira números não negativos.";
        return;
    }

    if (isNaN(number1) || isNaN(number2) || isNaN(number3) || isNaN(number4) || isNaN(number5)) {
        document.getElementById("result").textContent = "Por favor, insira todos os números corretamente.";
        return;
    }

    const media = (number1 + number2 + number3 + number4 + number5) / 5;
    
    const maioresQueMedia = [];
    if (number1 > media) maioresQueMedia.push(number1);
    if (number2 > media) maioresQueMedia.push(number2);
    if (number3 > media) maioresQueMedia.push(number3);
    if (number4 > media) maioresQueMedia.push(number4);
    if (number5 > media) maioresQueMedia.push(number5);

    document.getElementById("result").textContent = "Média: " + media + ". Números acima da média: " + maioresQueMedia.join(", ");
}