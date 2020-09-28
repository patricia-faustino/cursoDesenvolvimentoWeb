const escola = "Cod3r"

console.log(escola.charAt(4))//Retorna caractere a partir da posicao informada
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3))//Retorna valor da tabela Unicode

console.log(escola.indexOf('3'))// Retorna a posicao do char informado

console.log(escola.substring(1)) //recortar a partir da posição indicada
console.log(escola.substring(0 , 3))

console.log('Escola '.concat(escola).concat("!"))

console.log(escola.replace(3 , 'e')) //substituir tudo que tiver no primeiro espaço por o que estiver após a virgula

console.log('Maria,João,Paulo,Carmen'.split(','))
