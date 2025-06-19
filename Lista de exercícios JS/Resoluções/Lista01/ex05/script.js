function calcularCalorias() {
    let armazenaCalorias = 0;

    const vegetariano = document.getElementById("vegetariano");
    const peixe = document.getElementById("peixe");
    const frango = document.getElementById("frango");
    const carne = document.getElementById("carne");

    const abacaxi = document.getElementById("abacaxi");
    const sorvete = document.getElementById("sorvete");
    const mouseDiet = document.getElementById("mouse_diet");
    const mouseChocolate = document.getElementById("mouse_chocolate");

    const cha = document.getElementById("cha");
    const sucoLaranja = document.getElementById("suco_laranja");
    const sucoMelao = document.getElementById("suco_melao");
    const refrigerante = document.getElementById("refrigerante");

    if (vegetariano.checked) {
        armazenaCalorias += 180;
    }

    if (peixe.checked) {
        armazenaCalorias += 230;
    }

    if (frango.checked) {
        armazenaCalorias += 250;
    }

    if (carne.checked) {
        armazenaCalorias += 350;
    }

    if (abacaxi.checked) {
        armazenaCalorias += 75;
    }

    if (sorvete.checked) {
        armazenaCalorias += 110;
    }

    if (mouseDiet.checked) {
        armazenaCalorias += 170;
    }

    if (mouseChocolate.checked) {
        armazenaCalorias += 200;
    }

    if (cha.checked) {
        armazenaCalorias += 20;
    }

    if (sucoLaranja.checked) {
        armazenaCalorias += 70;
    }

    if (sucoMelao.checked) {
        armazenaCalorias += 100;
    }

    if (refrigerante.checked) {
        armazenaCalorias += 65;
    }

    document.getElementById("resultado").textContent = "Total de calorias: " + armazenaCalorias;
}