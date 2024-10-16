function calcularMediaPonderada(nota1, nota2, nota3) {
    const pesos = [2, 3, 5];
    const somaPesos = pesos.reduce((acc, peso) => acc + peso, 0);
    
    const media = (nota1 * pesos[0] + nota2 * pesos[1] + nota3 * pesos[2]) / somaPesos;
    return media;
}


function lerNotas() {
    const nota1 = parseFloat(prompt("Digite a primeira nota:"));
    const nota2 = parseFloat(prompt("Digite a segunda nota:"));
    const nota3 = parseFloat(prompt("Digite a terceira nota:"));

    const media = calcularMediaPonderada(nota1, nota2, nota3);
    console.log(`A média ponderada das notas é: ${media.toFixed(2)}`);
}


lerNotas();
