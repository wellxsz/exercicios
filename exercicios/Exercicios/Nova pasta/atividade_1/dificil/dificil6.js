function maiorNumero(a, b) {
    return Math.max(a, b);
}


function lerNumeros() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));

    const maior = maiorNumero(num1, num2);
    console.log(`O maior número é: ${maior}`);
}


lerNumeros();
