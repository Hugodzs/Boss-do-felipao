//variaveis
let nameHero = "Hugo"

let experiencia = "9300"

if(experiencia <= "1000" ){
    console.log(nameHero + " Tem "+ experiencia + " pontos de Experiência e está no ranking Ferro")
}
else if(experiencia >="1001" && experiencia <="2000"){
    console.log(nameHero + " Tem "+ experiencia + " pontos de Experiência e está no ranking Bronze")
}
else if(experiencia >="2001" && experiencia <="5000"){
    console.log(nameHero + " Tem "+ experiencia + " pontos de Experiência e está no ranking Prata")
}
else if(experiencia >="5001" && experiencia <="7000"){
    console.log(nameHero + " Tem "+ experiencia + " pontos de Experiência e está no ranking Ouro")
}
else if(experiencia >="7001" && experiencia <="8000"){
    console.log(nameHero + " Tem "+ experiencia + " pontos de Experiência e está no ranking Platina")
}
else if(experiencia >="8001" && experiencia <="9000"){
    console.log(nameHero + " Tem "+ experiencia + " pontos de Experiência e está no ranking Ascendente")
}
else if(experiencia >="9001" && experiencia <="10000"){
    console.log(nameHero + " Tem "+ experiencia + " pontos de Experiência e está no ranking Imortal")
}
else if(experiencia >="10001"){
    console.log(nameHero + " Tem "+ experiencia + " pontos de Experiência e está no ranking Radiante")
}

else{console.log("Digite um valor válido")
}
