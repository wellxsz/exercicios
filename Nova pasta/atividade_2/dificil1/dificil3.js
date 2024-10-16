let year = 2024
const bix = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
if (bix = true) {
    console.log ('o ano atual é bisexto')    
} else {
    console.log ('O ano atual não é bixesto')   
}