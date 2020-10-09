const escola =[{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 9.1
    },{
        nome: 'Augusta',
        nota: 9.8
    }]
},  {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 7.8
    },{
        nome: 'Flávio',
        nota: 5.8
    }]
}]

const getNotasDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 9.1, 9.8 ], [ 7.8, 5.8 ]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)