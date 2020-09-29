let vetor =[1, 2, 3, 4, 5]

function one(vetor,inteiro ){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * inteiro)
    });

    return vetorResultado 
}

console.log(one(vetor,3))
