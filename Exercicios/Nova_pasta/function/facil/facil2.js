function idade(y){
    const old = 2024 - y
    if (old >= 18) {
        console.log (`Você tem ${old} anos! Você já é maior de idade!`)
    } else {
        console.log (`Você tem ${old} anos! Você ainda é menor de idade!`)
    }
}
idade(2007)