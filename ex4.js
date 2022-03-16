const prompt = require("prompt-sync")();
const userName = prompt("Insira seu nome de usuário: ");
console.log(
  "Para sua segurança a senha necessita ter mais de 8 caracteres, um número e um caracter especial"
);
let userPassword = prompt("Insira sua senha:  ");

let formatSpecial = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
let formatNumber = /[0-9]/;

let specialFlag = formatSpecial.test(userPassword);
let numberFlag = formatNumber.test(userPassword);

while (userPassword.length < 8 || !numberFlag || !specialFlag) {
  if (userPassword.length < 8) {
    console.log("A senha precisa ter 8 caracteres ou mais!!");
  }
  if (!numberFlag) {
    console.log("A senha precisa ter algum número!");
  }
  if (!specialFlag) {
    console.log("A senha precisa ter algum caracter especial!!");
  }
  userPassword = prompt("Insira sua senha:  ");
  specialFlag = formatSpecial.test(userPassword);
  numberFlag = formatNumber.test(userPassword);
}

let hiddenPassword = "";
for (const a in userPassword) {
  hiddenPassword += "*";
}

console.log("Cadastro feito com sucesso!");
console.log(`Seu login é: ${userName}`);
console.log(`Sua senha é: ${hiddenPassword}`);
