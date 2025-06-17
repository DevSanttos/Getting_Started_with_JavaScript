document.getElementById("buttonEnvia").addEventListener("click", function(e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById("pesoInput").value);
    const altura = parseFloat(document.getElementById("alturaInput").value);
    let imc = (peso/(altura**2));

    let resultadoDiv = document.getElementById("resultado");
    let mensagem = '';

    if (imc >= 40) {
        mensagem += '<p>Obesidade III</p>';
    } else if (imc >= 35) {
        mensagem += '<p>Obesidade II</p>';
    } else if (imc >= 30) {
        mensagem += '<p>Obesidade I</p>';
    } else if (imc >= 25) {
        mensagem += '<p>Sobrepeso</p>';
    } else if (imc >= 18.5) {
        mensagem += '<p>Normal</p>';
    } else {
        mensagem += '<p>Magreza</p>';
    }
    resultadoDiv.innerHTML = mensagem;
});