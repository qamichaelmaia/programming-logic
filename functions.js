//Command terminal (node functions)

/// Primeira mensagem
function ola(param) {
        return `Olá ${param}`
}

console.log(ola('mundo'));

/// Segunda mensagem
(function (param) {
    console.log(param)
})('Como vai?')

///terceira mensagem
var ola = function ola(param){
    return `Seja ${param}`
}

console.log(ola('bem-vindo'))

/// Mutiplicação do valor *
const dobro = (valor) =>{
    return valor * 2
}
console.log(dobro(4))

const dobro2 = valor => valor * 2
console.log(dobro2(8))
///

/// Variação de estrutura () _
let hello =  () => console.log('Hello')
hello()

let hello2 =  _ => console.log('Welcome')
hello2()

/// Adicionar, multiplicar, subtrair, e dividir valores (+ * - /)
const adiciona = (a, b, c)  => a + b + c
console.log(adiciona(2,3,5))

const multiplica = (a = 2, b =3, c =5)  => a * b * c
console.log(multiplica(2,3,5))
console.log(multiplica(2,6))
console.log(multiplica(5))

const subtrai = (a, b, c)  => a - b - c
console.log(subtrai(2,3,5))

const divide = (a, b, c)  => a / b / c
console.log(divide(2,3,5))