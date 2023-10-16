
let nomeHero = "Hugow"

let experiencia = 900


switch (experiencia) {
     case experiencia<=1000: 
        console.log(nomeHero + " tem " + experiencia + "pontos de Experiência e está no ranking Ferro!");
        break;
     case experiencia>=1001 && experiencia<=2000:
        console.log(nomeHero + " tem " + experiencia + "pontos de Experiência e está no ranking Prata!");
        break;
     case experiencia>=2001 && experiencia<=5000:
       console.log(nomeHero + " tem " + experiencia + "pontos de Experiência e está no ranking Ouro!");
        break;
     case experiencia>=5001 && experiencia<=7000:
        console.log(nomeHero + " tem " + experiencia + "pontos de Experiência e está no ranking Diamante!")
        break;
     case experiencia>=7001 && experiencia<=8000:
        console.log(nomeHero + " tem " + experiencia + "pontos de Experiência e está no ranking Platina!")
        break;
     case experiencia>=8001 && experiencia<=9000:
        console.log(nomeHero + " tem " + experiencia + "pontos de Experiência e está no ranking imortal!");
        break;  
     case experiencia>=9001 && experiencia<=10000:
        console.log(nomeHero + " tem " + experiencia + "pontos de Experiência e está no ranking Master!");
        break; 
     case experiencia>=10001:
        console.log(nomeHero + " tem " + experiencia + "pontos de Experiência e está no ranking Maxmil!");
        break;  
     default: 
     console.log("erro");
}
