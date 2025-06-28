function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        document.getElementById("resultado").textContent = "Por favor, insira todas as notas corretamente.";
        return;
    }

    if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        document.getElementById("resultado").textContent = "As notas não podem ser negativas.";
        return;
    }

    if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10) {
        document.getElementById("resultado").textContent = "As notas devem estar entre 0 e 10.";
        return;
    }

    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    
    if(media >= 7) {
        document.getElementById("resultado").textContent = "A média é " + media.toFixed(2) + ". Você foi aprovado!";
        document.getElementById("nota1").value = "";
        document.getElementById("nota2").value = "";
        document.getElementById("nota3").value = "";
        document.getElementById("nota4").value = "";
    } else {
        localStorage.setItem("mediaPreExame", media.toFixed(2));
        window.location.href = "exame.html";
    }
}

function calcularResultadoExame() {
    const exameNota = parseFloat(document.getElementById("notaExame").value);
    const mediaPreExame = parseFloat(localStorage.getItem("mediaPreExame"));
    
    if (isNaN(exameNota) || exameNota < 0 || exameNota > 10) {
        document.getElementById("resultadoExame").textContent = "Por favor, insira a nota do exame corretamente (entre 0 e 10).";
        return;
    }
    
    const mediaExame = (mediaPreExame + exameNota) / 2;

    if (mediaExame >= 5) {
        document.getElementById("resultadoExame").textContent = "Você foi aprovado no exame com média " + mediaExame.toFixed(2) + ".";
    } else {
        document.getElementById("resultadoExame").textContent = "Você foi reprovado. Tente novamente no exame com média " + mediaExame.toFixed(2) + ".";
    }
}

function carregarMediaExame() {
    const mediaPreExame = localStorage.getItem("mediaPreExame");
    if (mediaPreExame) {
        document.getElementById("mediaPreExame").textContent = mediaPreExame;
    }
}