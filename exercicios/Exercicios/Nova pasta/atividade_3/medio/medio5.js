let num1 = 10
let num2 = 2
if ((num1 % 5 === 0)) {
    if ((num2 % 5 === 0)) {
        console.log ('Os dois são divisiveis por 5')
    } else {
        console.log ('Apenas o primeiro é divisivel por 5')
    }
} else {
    if ((num2 % 5 === 0)) {
        console.log ('Apenas o segundo é divisivel por 5')
    } else {
        console.log ('Nenhum dos dois numeros é divisivel por 5')
    }
}