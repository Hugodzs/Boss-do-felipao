// nao consegui rodar com o switch case =()
let nomeHero = "Hugow"

let experiencia = "1000"

let ranking

  switch (experiencia) {
     case experiencia<="1000": 
        ranking = "Ferro";
        break;
     case experiencia>="1001" && experiencia<="2000":
        ranking = "Bronze";
        break;
     case experiencia>="2001" && experiencia<="5000":
       ranking = "Prata";
        break;
     case experiencia>="5001" && experiencia<="7000":
       ranking = "Ouro";
        break;
     case experiencia>="7001" && experiencia<="8000":
        ranking = "Platina";
        break;
     case experiencia>="8001" && experiencia<="9000":
        ranking = "Master";
        break;  
     case experiencia>="9001" && experiencia<="10000":
        ranking = "Imortal";
        break; 
     case experiencia>="10001":
        ranking = "Radiante";
        break;  
     default: 
        ranking = "Ja era";
    }
    console.log(` ${nomeHero} está com ${experiencia} pontos de Experiência e está no ranking ${ranking}!`)