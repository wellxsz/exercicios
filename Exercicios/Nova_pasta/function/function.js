let numerodavez = 3
function palmeiras (){

    console.log (`O numero da vez é ${numerodavez}`)
    console.log (`O numero da vez (${numerodavez}) ao quadrado vale ${numerodavez **2}`)

}

palmeiras()


function resolverBhaskara (a, b, c) {

const delta = b ** 2 - 4 * a * c;
const x1 = (-b + resolverRaizQuadrada(delta)) / (2 * a);
const x2 = (-b - resolverRaizQuadrada(delta))/ (2 * a);

console.log(`Os dois valores de X dos pontos da parabola no eixo X são ${x1} e ${x2}`)
}

function resolverRaizQuadrada(base) {

    return base ** (1/2);
}


resolverBhaskara (2, 3, -2)