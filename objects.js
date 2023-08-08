//Command terminal (node objects)


let frutas = ['Maçã', 'Banana', 'Uva']
console.log(frutas.length)

let primeiraFruta = frutas[0]
console.log(primeiraFruta)

let ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)

frutas.push('Pêra', 'Abacaxi', 'Tomate') //add

frutas.forEach((frutas) => {
    console.log(frutas)
})

frutas.pop() //delete lasted

frutas.forEach((frutas) => {
    console.log(frutas)
})


var jsonJS = [
    {
        "nome": function(){ //not valid json
            return 'João'
        },
        "idade": "42"
    },
    {
        "nome": "Maria",
        "idade": 25
    }
]

console.log(jsonJS)

const jsonRest = {
    "nome": "Daniel",
    "idade": 26

}

console.log(jsonRest)

console.log(JSON.stringify(jsonJS))

const texto = '[{"idade":"42"},{"nome":"Maria","idade":25}]'
console.log(JSON.parse(texto))