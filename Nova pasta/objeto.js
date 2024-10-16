const identidade = {
    nome: 'Wellington',
    sobrenome: 'Barros',
    cpf: '111.111.111-11',
    escola: 'Senai Morvan Figueiredo',
    idade: 17,
};
/* lembra de fechar sua pasta pra ngm atrapalhar seu codigo 👍 */

console.log(identidade)

console.log (identidade.nome)
console.log (identidade.idade)
console.log (identidade['cpf'])

const investimentomensal = [1000, 500, 200, 700]
const arraystrings = ['string1', 2]
console.log (`O valor investido no mês de janeiro foi: ${investimentomensal[0]}`)
console.log (`O valor investido no mês de fevereiro foi: ${investimentomensal[1]}`)
console.log (`O valor investido no mês de março foi: ${investimentomensal[2]}`)
console.log (`O valor investido no mês de abril foi: ${investimentomensal[3]}`)