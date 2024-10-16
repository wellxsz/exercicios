let a = 2
let b = 2
let c = 3

if (a + b > c && a + c > b && b + c > a) {
  
    if (a === b && b === c) {
        console.log  ("Equilátero");
    } else if (a === b || a === c || b === c) {
        console.log ("Isósceles");
    } else {
        console.log  ("Escaleno");
    }
} else {
    console.log ("Os lados não formam um triângulo.");
}

