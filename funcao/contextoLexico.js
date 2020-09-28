const valor = 'Global'

function minhaFuncao() {
	console.log(valor)
}

function exec() {
	const valor = 'Local'
	minhaFuncao()
	
}

function exec () {
	const valor = 'Local'
	minhaFuncao()
}

exec()
