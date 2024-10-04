let salario = 2000
const porcentagem_aumento = 0.05
const porcentagem_diminui = 0.1

if (salario <= 2000) {
    let salario2 = salario * porcentagem_aumento
    let full1 = salario + salario2
    console.log ('Você teve um aumento! Novo salario:', full1)
    
} else {
    
    
    let salario2 = salario * porcentagem_diminui
    let full = salario - salario2
    console.log (full)
}