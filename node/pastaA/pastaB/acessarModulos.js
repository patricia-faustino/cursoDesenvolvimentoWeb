// caminho relativo para acessar módulo
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola)

const http = require('http')
http.createServer((req, res) =>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)