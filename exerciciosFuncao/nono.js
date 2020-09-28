function aprove(nota){
    let notaCorrigida = arredonda(nota)
    if(notaCorrigida >= 40){
        console.log(`Aprovado com nota ${notaCorrigida}`)

    }else{
        console.log(`Reprovado com nota ${notaCorrigida}`)

    }
   
}

function arredonda(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    }else {
        return nota
    }
}
aprove(38)
aprove(30)
aprove(50)
aprove(100)

