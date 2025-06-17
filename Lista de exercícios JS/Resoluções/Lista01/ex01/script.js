document.getElementById("enviaValorInput").addEventListener("click", function (e) {
    e.preventDefault();

    const num = parseInt(document.getElementById("valorInput").value);
    const resultadoDiv = document.getElementById("exibeResultado");
    let contaVerificaçoes = 0;
    let mensagemFinal = "";
    
    if (!isNaN(num)) {
      if (num % 10 == 0) {
        mensagemFinal +='<p>Seu número é divisível por 10</p>'
        contaVerificaçoes++;
      }

      if (num % 5 == 0) {
        mensagemFinal +='<p>Seu número é divisível por 5</p>'
        contaVerificaçoes++;
      }

      if (num % 2 == 0) {
        mensagemFinal +='<p>Seu número é divisível por 2</p>'
        contaVerificaçoes++;
      }

      if (contaVerificaçoes === 0) {
        mensagemFinal += `<p>Seu número não é divisível por 2, 5 e 10</p>`;
      }
    } else resultadoDiv.innerHTML = "<p>O número informado não pode ser nulo</p>";
    resultadoDiv.innerHTML = mensagemFinal;
  });
