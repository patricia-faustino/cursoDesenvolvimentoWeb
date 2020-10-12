console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

// tornando as variaveis "exportaveis"
// this e exports são referências para onde o exports aponta
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = { 
    nome: 'Teste'
}

console.log(module.exports)

/*Caso queira atribuir um novo objeto para ser exportado
isso deve ser feito por module.exportaveis */
module.exports = { public: true }