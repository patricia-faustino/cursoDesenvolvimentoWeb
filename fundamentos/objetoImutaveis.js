let o = { x : 1} , p = { x : 1}
console.log(o===p) 

let a =[] , b =a

// Comparando objetos
b[0] = 1
console.log(a[0])
console.log(a === b)

// Criando cópia de um objeto
let x = ['a', 'b', 'c']
let y = []
for(let i= 0; i< x.length; i++){
    y[i] = x[i]
    console.log(y[i])

}
 console.log(x === y)

 // Comparação de Arrays
 function equalArrays(a , b){
     if(a.length != b.length){
         return false
     }
     for(let i =0; i< a.length; i++){
         if(a[i] !== b[i]){
             return false
         } else{
            return true
         }
         
     }
     
 }

a= [2,3,4]
b=[2,4]
console.log(equalArrays(a,b))

a = [2,3,5]
b = [2,3,5]
console.log(equalArrays(a,b))

a = [2,3,5]
b = [2,3,7]
console.log(equalArrays(a,b))

a = {}
console.log(a.toString())
console.log(a.valueOf())
