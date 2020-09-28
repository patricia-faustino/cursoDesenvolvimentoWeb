// array heterogêneo
//não tem tamanho fixo

const valores = [7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') //adicionar valores no array
console.log(valores)

console.log(valores.pop())//tira o último elemento do array
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores)