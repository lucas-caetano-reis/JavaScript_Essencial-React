const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres, ...resto);

const listas = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [lista1, lista2, lista3] = listas;
console.log(lista2[2]);
