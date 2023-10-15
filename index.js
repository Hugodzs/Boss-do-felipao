let nomeDoHeroi = "Higão"
let Experiencia = ""

do {
  Experiencia = prompt(5);
} while(Experiencia < 1 || Experiencia > 10);

console.log(nomeDoHeroi + `Você digitou o número ${Experiencia}.`);
