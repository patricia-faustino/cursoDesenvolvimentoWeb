function aumento(salario, plano){
    switch (plano){
        case 'A':
            salario += salario * 0.1
            console.log(salario)
            break
        case 'B' :
            salario += salario * 0.15
            console.log(salario) 
            break
        case 'C':
            salario += salario * 0.2
            console.log(salario)
            break
        default:
                console.log('Plano inválido.')



    }
}

aumento(5000, 'A')
aumento(3000, 'B')
aumento(16000, 'C')
aumento(5000, 'F')