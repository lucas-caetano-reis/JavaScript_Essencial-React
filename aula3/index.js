// Declaração de funções (Function Hoisting)

falaOi();

// As funções são tratadas como First-Class Objects (Objetos de Primeira Classe)

function falaOi() {
  console.log("Oi");
}

// Function Expression
const souUmDado = function () {
  console.log("Sou um dado.");
};

function executaFuncao(funcao) {
  funcao();
}

executaFuncao(souUmDado);

// Arrow Function
const funcaoArrow = () => {
  console.log("Sou uma Arrow Function.");
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log("Estou falando...");
  },
};
obj.falar();
