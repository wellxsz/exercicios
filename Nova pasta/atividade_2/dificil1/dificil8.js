let extrawork = false
let prov1 = 7
let prov2 = 7
let prov3 = 10
let frequen = 85
let nota_work = 5

if (extrawork) {
    if (frequen >= 80) {
        const final = ((prov1 + prov2 + prov3 + nota_work) / 4)
        if (final >= 7) {
            console.log ('Aprovado!')
            
        } else {
            console.log ('Reprovado por nota')
            
        }
    } else {
        console.log ('Reprovado por falta!')
        
    }    
} else {
    if (frequen >= 80) {
        const final = ((prov1 + prov2 + prov3) / 3)
        if (final >= 7) {
            console.log ('Aprovado!')
            
        } else {
            console.log ('Reprovado (e nem fez a atividade extra, abobado)')
            
        }
    } else {
        console.log ('Reprovado por falta!')
        
    }
    
}