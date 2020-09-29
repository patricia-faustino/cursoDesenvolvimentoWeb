let contador = 0
let vetor =[-5, -2, -1, 0, 1, 2, 3, 4, 5, 6, - 12]

for(let i =0; i< vetor.length; i++){
    if(vetor[i] < 0){
        contador += 1 
    }
}
console.log(contador)