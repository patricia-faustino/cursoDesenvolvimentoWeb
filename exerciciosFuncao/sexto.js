function jurosSimples(c,i,t){
    let montante = c + c * t * i
    return montante
}

function jurosCompostos(c,i,t){
    let montante = c * Math.pow((1 + i),t)
    return montante
}

console.log(jurosCompostos(1000,0.1,0.5))
console.log(jurosSimples(1000,0.1,0.5))
