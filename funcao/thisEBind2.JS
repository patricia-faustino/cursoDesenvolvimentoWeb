function Pessoa() {
	this.idade = 0 // atributo idade a disposição do objeto a ser instanciado
	
	const self = this
	setInterval(function() {
		self.idade++
		console.log(self.idade)
	}/*.bind(this)*/, 1000)
}

new Pessoa