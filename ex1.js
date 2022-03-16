const prompt = require("prompt-sync")();
console.clear();
const num = +prompt("Coloque um número:  ");
const evenList = [];
const oddList = [];
for (let index = 0; index <= num; index++) {
  if (index % 2 === 0) {
    evenList.push(index);
  } else {
    oddList.push(index);
  }
}
console.log("Números pares:");
console.log(evenList);
console.log("Números ímpares:");
console.log(oddList);
