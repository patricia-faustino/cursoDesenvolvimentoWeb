// Uma factory retorna um objeto
module.exports = () =>{ 
    return{ 
        valor: 1, 
        inc(){
            return this.valor++
        }
        
    }
}