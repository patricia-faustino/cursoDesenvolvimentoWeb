const quaseArray = {0: 'Rafael', 1: 'Bia', 2: 'Angelo'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString',{
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael' , 'Bia', 'Angelo']
console.log(quaseArray.toString(), meuArray)