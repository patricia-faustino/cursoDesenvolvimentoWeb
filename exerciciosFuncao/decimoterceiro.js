function cardapio(codigo, quantidade){
    let valor = 0
    switch(codigo){
        case 100:
            valor = quantidade * 3.00
            console.log(`R$ ${valor}`)
            break
        case 200:
            valor = quantidade * 4.00
            console.log(`R$ ${valor}`)
            break
        case 300:
            valor = quantidade * 5.50
            console.log(`R$ ${valor}`)
            break
        case 400:
            valor = quantidade * 7.50
            console.log(`R$ ${valor}`)
            break
        case 500:
            valor = quantidade * 3.50
            console.log(`R$ ${valor}`)
            break
        case 600:
            valor = quantidade * 2.00
            console.log(`R$ ${valor}`)
            break
        default:
                console.log('Códgio inválido.')
    }
}
cardapio(100, 1)
cardapio(200, 1)
cardapio(300, 1)
cardapio(400, 1)
cardapio(500, 1)
cardapio(600, 1)
cardapio(100, 5)
cardapio(200, 3)
cardapio(300, 4)
cardapio(400, 4)
cardapio(500, 2)
cardapio(600, 8)
