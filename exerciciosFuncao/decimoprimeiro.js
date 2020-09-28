function bissexto(ano){
    if(ano % 400 ==0){
        console.log('De 400 em 400 anos é ano bissexto')
        return true
    }else if(ano % 100 == 0){
        console.log('De 100 em 100 anos não é ano bissexto')
        return false
    }else if(ano % 4 == 0){
        console.log('De 4 em 4 anos é ano bissexto')
        return true
    }else{
        console.log('Não é um ano bissexto')
    }

}
bissexto(2016)
bissexto(2017)
bissexto(2000)