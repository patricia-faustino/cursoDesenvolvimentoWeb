/* Eu vou chamar uma função a partir de outra função 
e quando acontecer determinado evento vai chamar de
volta a função */

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))