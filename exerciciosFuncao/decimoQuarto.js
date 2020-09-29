let pS = function planodeSaude(idade){
    const taxa= 100.00

    if(idade < 10){
        let valor = taxa + 80.0
        console.log(`O valor a ser pago é: R$ ${valor}`)

    } else if(idade >= 10 && idade <=30){
        valor = taxa + 50.0
        console.log(`O valor a ser pago é: R$ ${valor}`)
    } else if(idade > 30 && idade <= 60){
        valor = taxa + 95.0
        console.log(`O valor a ser pago é: R$ ${valor}`)
    } else if(idade > 60){
        valor = taxa + 130.0
        console.log(`O valor a ser pago é: R$ ${valor}`)
    } else{
        console.log('Idade inválida')
    }
}

pS(9)
pS(10)
pS(15)
pS(30)
pS(35)
pS(60)
pS(61)
pS(95)
pS('hehe')