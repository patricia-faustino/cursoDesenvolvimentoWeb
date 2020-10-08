const aprovados = ['Agata' , 'Isabel', 'Samuel', 'Raquel']

aprovados.forEach(function(nome, indice){ //recebe três parametros : nome, indice e array
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome =>console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)