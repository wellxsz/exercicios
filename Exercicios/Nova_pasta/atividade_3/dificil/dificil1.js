let a = 8;
let b = 10;
let c = 6;
const med = ((a + b + c)/3);

if (med >= 7) {
    console.log ('Aprovado, sua nota foi:', med)
} else {
    if (med >= 5) {
        console.log ('Recuperação, sua nota foi:', med)
    } else {
        console.log ('Reprovado, sua nota foi:', med)
    }
}
