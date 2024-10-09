function fatorial(n) {
    if (n < 0) {
        return "Fatorial não está definido para números negativos.";
    }

    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i; 
    }

    return resultado;
}


let n = 5; 
console.log(`O fatorial de ${n} é ${fatorial(n)}.`);