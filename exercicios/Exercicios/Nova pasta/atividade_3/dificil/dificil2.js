let lado_a = 3
let lado_b = 4
let lado_c = 3

if ((lado_a === lado_b) && (lado_a === lado_c)) {
    console.log ('Equilátero')
} else {
    if ((lado_a === lado_b) || (lado_a === lado_c) || (lado_b === lado_c)) {
        console.log ('Isósceles')
    } else {
        console.log ('Escaleno')
    }
}