function gerarTabuada() {
    const base = parseInt(document.getElementById('base').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(base)) {
        document.getElementById('resultado').textContent = 'Por favor, insira um número válido.';
        return;
    }

    if (base < 1 || base > 10) {
        document.getElementById('resultado').textContent = 'Por favor, escolha uma base entre 1 e 10.';
        return;
    }
    
    resultado.textContent = '';
    for (let i = 1; i <= 10; i++) {
        resultado.textContent += `${i} x ${base} = ${i * base}, `;
    }
    resultado.textContent = resultado.textContent.slice(0, -2);
}