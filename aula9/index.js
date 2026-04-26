class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando...`);
  }
}

const p1 = new Pessoa("Lucas", "Caetano");
const p2 = new Pessoa("João", "Gomez");
const p3 = new Pessoa("Carlos", "Henrique");
const p4 = new Pessoa("Alexandre", "Júnior");

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

p1.falar();
p2.falar();
p3.falar();
p4.falar();
