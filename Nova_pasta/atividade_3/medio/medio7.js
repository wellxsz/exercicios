let a = 11;
let isPrimo = true;
for (let i = 2; i < a; i++) {
    if (a % i === 0) {
        isPrimo = false;
        break;
    }
}
if (isPrimo) {
    console.log('Primo');
} else {
    console.log('Não primo');
}
