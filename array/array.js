// Estrutura indexada
// Array internamente é um objeto
// Estrutura dinâmica
// Estrutura heterogênea
// Boas práticas : usar o mesmo tipo no array

console.log(typeof Array)

let aprovados = new Array('Bia', 'Ana', 'Paulo') // não é tão utilizado
console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Paulo']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Carlos' // geralmente é usado para substituir valores
aprovados.push('Abia') 
console.log(aprovados.length)

aprovados[9] = 'Messias'
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // altera o array, função que ordena de forma crescente
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Ana', 'Bia', 'Paulo']
aprovados.splice(1, 1)
console.log(aprovados)