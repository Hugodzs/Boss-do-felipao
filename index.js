let nomeDoHeroi = "Higão"
let Experiencia = 5

do {
  Experiencia = prompt('Digite um número entre 1 e 10:');
} while(Experiencia < 1 || Experiencia > 10);

console.log(nomeDoHeroi + `Você digitou o número ${numero}.`);
