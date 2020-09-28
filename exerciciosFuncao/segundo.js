function triangulo(a, b, c) { 
    if(a == b && a==c){
        console.log('É um triângulo equilatero!')
    } else if(( a== b && a != c) || ( b == c && b!= a) || (c == a && c != b)){
        console.log('É um triângulo isoceles!')
    } else if(a != b && b != c && c != a) {
        console.log('É um triângulo escaleno!')
    } else{
        console.log('Não é um triângulo!')
    }
}

triangulo(3, 4, 5)
triangulo(4, 4, 4)
triangulo(3 , 5, 3)