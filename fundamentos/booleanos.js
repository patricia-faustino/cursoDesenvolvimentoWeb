let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//conversão de um tipo em booleano
isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!(Infinity)) // exemplo : 7/0
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!null)
console.log(!!'')
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar....')


console.log(''|| null || 0 || ' ')// encontrar unico valor verdadeiro ou primeiro valor verdadeiro

//conversão para booleano
console.log(!!(''|| null || 0 || ' '))

let nome = 'Lucas'
//caso a variavel não esteja preenchida ('') ele retorna o próximo valor
console.log(nome || 'Desconhecido')