Array.prototype.forEach2 = function(callback){
    for(let i =0; i< this.length; i++){ // this é a forma de acessar a instancia do array no prototype
        callback(this[i], i, this)
    }

}
const aprovados = ['Agata' , 'Isabel', 'Samuel', 'Raquel']

aprovados.forEach2(function(nome, indice){ //recebe três parametros : nome, indice e array
    console.log(`${indice + 1}) ${nome}`)
})