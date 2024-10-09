let A = 9
let B = 9
let C = 10

if ((A === B) && (A === C)) {
    console.log ('Todos são iguais')
} else {
    if ((A > B) && (A > C)) {
        console.log ('O numero', A, 'é o maior')
    } else {
        if ((B > A) && (B > C)) {
            console.log ('O numero', B, 'é o maior')
        } else {
            console.log ('O numero', C, 'é o maior')
        }
    }
}