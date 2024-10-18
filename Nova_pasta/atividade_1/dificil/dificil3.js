function podeFormarTriangulo(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}
function verificarTriangulo() {
    const a = parseFloat(window.prompt("Digite o primeiro lado:"));
    const b = parseFloat(window.prompt("Digite o segundo lado:"));
    const c = parseFloat(window.prompt("Digite o terceiro lado:"));

    if (podeFormarTriangulo(a, b, c)) {
        console.log("Os lados podem formar um triângulo válido.");
    } else {
        console.log("Os lados não podem formar um triângulo válido.");
    }
}

verificarTriangulo();
