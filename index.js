let nomeDoHeroi = "Higão"
let Experiencia = ""

do {
  Experiencia = prompt("dIGITE UM NUMERO VALIDO");
} while(Experiencia < 1 || Experiencia > 10);

console.log(nomeDoHeroi + `Você digitou o número ${Experiencia}.`);
