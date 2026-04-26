const pessoa = {
  nome: "João",
  sobrenome: "Gomes",
  idade: 25,
  endereco: {
    rua: "Av Deodoro da Fonseca",
    numero: 250,
  },
};

//Atribuição via desestruturação
const { nome, sobrenome } = pessoa;
const {
  endereco: { rua, numero },
} = pessoa;
console.log(nome, sobrenome);
console.log(rua, numero);
