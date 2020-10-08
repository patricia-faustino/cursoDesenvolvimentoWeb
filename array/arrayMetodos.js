const kpop = ['BTS', 'Blackpink', 'Exo', 'Super Junior', 'Big Bang', 'Got7']
kpop.pop() // remove o último elemento do array
console.log(kpop)

kpop.push('Seventeen')
console.log(kpop)

kpop.shift() // remove o primeiro elemento!
console.log(kpop)

kpop.unshift('Twice') // adiciona no primeiro elemento
console.log(kpop)

// splice pode adicionar e remover elementos

// adicionar
kpop.splice(2, 0, 'BTS', 'GOT7')
console.log(kpop)

//remover
kpop.splice(3, 1)
console.log(kpop) 

const kpop1 = kpop.slice(2)
console.log(kpop1) 

const kpop2 = kpop.slice(1, 4)
console.log(kpop2)