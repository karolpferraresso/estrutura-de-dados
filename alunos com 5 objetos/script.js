const aluno = [
    { Nome: "Ana", Idade: 16, DisciplinaPreferida: "História"}, 
    { Nome: "João", Idade: 15, DisciplinaPreferida: "Matemática"},
    { Nome: "Amanda", Idade: 15, DisciplinaPreferida: "Biologia"},
    { Nome: "Marcos", Idade: 17, DisciplinaPreferida: "Geografia"},
    { Nome: "Júlia", Idade: 17, DisciplinaPreferida: "Português"}
];

const primeiroNome = aluno[0].Nome;
const ultimaDisciplina = aluno[4].DisciplinaPreferida;

alert("Primeiro aluno:" + primeiroNome)
alert("Disciplina do último aluno:" + ultimaDisciplina);