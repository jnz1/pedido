function sim() {
    alert("Você aceitou casar comigo! :)");
    // redireciona para um URL após clicar no SIM
    location.href = "https://www.youtube.com/watch?v=izGwDsrQ1eQ&ab_channel=georgemichaelVEVO";
}

function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
