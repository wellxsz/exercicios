function quadradoDaDiferenca(a, b) {
    const diferenca = a - b; 
    return diferenca * diferenca; 
}

function lerNumeros() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));

    const resultado = quadradoDaDiferenca(num1, num2);
    console.log(`O quadrado da diferença entre ${num1} e ${num2} é: ${resultado}`);
}

lerNumeros();
