let conceito = []

function conceituar(nota){
    
    for(let i =0; i < nota.length; i++){
        if(nota[i] >=0 && nota[i] <= 4.9){
            conceito.push('D')
            
        } else if(nota[i] >= 5.0 && nota[i] <= 6.9){
            conceito.push('C')
            
        } else if(nota[i] >= 7.0 && nota[i] <= 8.9){
            conceito.push('B')
    
        } else if(nota[i] >= 9.0 && nota[i] <= 10){
            conceito.push('A')
            
        } else{
            conceito.push('Nota Inválida')
        }
}
    return conceito
}


let nota = [0.0, 3.5, 4.9, 5.1, 6.9, 7.8, 8.9, 9.0, 10,'rr']
let vetorConceitos = conceituar(nota)

console.log(vetorConceitos)