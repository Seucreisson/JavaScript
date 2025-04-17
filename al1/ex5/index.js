const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
const dataNascimento = 1980
let IMC = peso / (altura * altura);
let nascimento = 2025 - dataNascimento;

console.log(`${nome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${IMC}`);
console.log(`nascido em ${dataNascimento} e tem ${nascimento} anos.`);