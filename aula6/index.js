// Reduce -> Reduz o array a um único elemento

// Some todos os números ( Reduce )
// Retorne um array com apenas os pares pares ( Filter )
// Retorne um array com o dobro dos valores ( Map )

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numeros.reduce(function (acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, 0);

const filtrarPares = numeros.filter((valor) => valor % 2 === 0);

const dobrarValores = numeros.map((valor) => valor * 2);

console.log(soma);
console.log(filtrarPares);
console.log(dobrarValores);

// Retorne a pessoas mais velha

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 64 },
  { nome: "Wallace", idade: 47 },
];

const pessoaMaisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(pessoaMaisVelha);
