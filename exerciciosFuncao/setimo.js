function bhaskara(a, b, c){
    let delta = Math.pow(b,2) - 4 * a * c
    let resultados = []
    if(delta > 0){
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        resultados.push(x1)
        resultados.push(x2)
        return resultados
    
    } 
        
        return 'Delta é negativo'
    
    
}

console.log(bhaskara(3, -5, 12))
console.log(bhaskara(2, -16 , -18))