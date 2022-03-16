const prompt = require("prompt-sync")();
console.clear();
const howMuchGrades = +prompt("Digite quantas notas deseja cadastrar:  ");
const status = {
  approved: 0,
  afterSchool: 0,
  failed: 0,
};
for (let index = 0; index < howMuchGrades; index++) {
  const grade = +prompt(`Digite a ${index+1}ª nota:  `);
  if (grade >= 7) {
    status.approved++;
  } else if (grade >= 5) {
    status.afterSchool++;
  } else {
    status.failed++;
  }
}

console.log("Alunos que foram aprovados: ");
console.log(status.approved);
console.log("Alunos que ficaram de recuperação: ");
console.log(status.afterSchool);
console.log("Alunos que foram reprovados: ");
console.log(status.failed);
