let a = 11;
let b = 11;
let c = 10;

if (a > b && a > c) {
    console.log('O maior número é o A');
} else if (b > a && b > c) {
    console.log('O maior número é o B');
} else if (c > a && c > b) {
    console.log('O maior número é o C');
} else {
    console.log('Há números iguais ou todos são iguais.');
}
