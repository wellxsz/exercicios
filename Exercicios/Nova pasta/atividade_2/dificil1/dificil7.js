const user = 'well'
const pass = 'well1'

let usertry = 'well'
let passtry = 'well2'

if ((user == usertry) && (pass == passtry)) {
    console.log ('Você entrou!')
    
} else {
    let usertry = 'well1'
    let passtry = 'well3'
    if ((user == usertry) && (pass == passtry)) {
        console.log ('Você entrou!')
        
    } else {
        let usertry = 'well'
        let passtry = 'well1'
        if ((user == usertry) && (pass == passtry)) {
            console.log ('Você entrou!')
            
        } else {
            console.log ('Você inseriu sua senha errado várias vezes, tente novamente mais tarde.')
        
            
        }
        
    }
    
}