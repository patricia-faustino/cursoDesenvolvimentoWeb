function conversao(inverte) {
    
    reais = `R$ ${inverte.toFixed(2).toString().replace(".", ",")}`
    console.log(reais)
}
conversao(0.2+0.1)