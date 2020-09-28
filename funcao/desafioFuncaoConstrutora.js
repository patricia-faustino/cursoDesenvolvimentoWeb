function Pessoa(nome) { 

	this.nome = 'João'
	this.falar =function() {
		console.log(`Meu nome é ${this.nome}`)
	}
}

const p1 = new Pessoa
p1.falar()

