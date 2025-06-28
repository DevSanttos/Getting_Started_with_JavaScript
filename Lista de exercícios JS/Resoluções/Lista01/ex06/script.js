function verificarDia() {
    const dia = parseInt(document.getElementById("txtDia").value);

    if (isNaN(dia) || dia < 1 || dia > 7) {
        document.getElementById("resultado").textContent = "Por favor, digite um número válido entre 1 e 7.";
        return;
    }

    switch(dia) {
        case 1:
            document.getElementById("resultado").textContent = "Domingo";
            break;
        case 2:
            document.getElementById("resultado").textContent = "Segunda-feira";
            break;
        case 3:
            document.getElementById("resultado").textContent = "Terça-feira";
            break;
        case 4:
            document.getElementById("resultado").textContent = "Quarta-feira";
            break;
        case 5:
            document.getElementById("resultado").textContent = "Quinta-feira";
            break;
        case 6:
            document.getElementById("resultado").textContent = "Sexta-feira";
            break;
        case 7:
            document.getElementById("resultado").textContent = "Sábado";
            break;
    }
}