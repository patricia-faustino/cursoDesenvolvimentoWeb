// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {....}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // congelar objeto : não pode mais alterá-lo , o objeto se torna constante
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'}) // a referência não pode ser modificada e nem o contéudo do objeto
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)