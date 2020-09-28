const pessoa = {
	saudacao : 'Bom Dia!',
	falar(){
		console.log(this.saudacao)
	}
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas : funcional e OO

//sempre que referenciar um objeto, o bind 'amarra' o objeto desejado
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()