let pass = 'Zkille'
const char = (pass.length)

if (char > 8){
    if (pass.includes(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)) {
        console.log ('Sua senha contém 8 ou mais caracteres e pelo menos um numero')
    } else {
        console.log ('Sua senha contém 8 caracteres, mas falta um numero') 
    }
    
} else {
    console.log ('Sua senha contém menos de 8 caracteres')

}