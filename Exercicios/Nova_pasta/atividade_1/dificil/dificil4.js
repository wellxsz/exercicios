function verificarIntervalo(x) {
    if (x >= 10 && x <= 20) {
        console.log(`${x} está dentro do intervalo [10, 20].`);
    } else {
        console.log(`${x} não está dentro do intervalo [10, 20].`);
    }
}


let x = 15;
verificarIntervalo(x);
