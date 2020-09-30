const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13 
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
}) 

Object.defineProperty(pessoa,'dataDeNascimento', {
    enumerable : true, // pode ser enumerada?
    writable: false, // pode ser modificada?
    value: '01/ 05/ 2018'
})

pessoa.dataDeNascimento= '20/ 08/ 2020'
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa))

const dest ={ a: 1 }
const o1 = { b: 5 }
const o2 = { c: 7, a: 4 }
const obj = Object.assign(dest, o1, o2) // o objeto dest não é alterado, será criado novo objeto 
console.log(obj)

Object.freeze(obj)
obj.c = 123
console.log(obj)