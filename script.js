
alert("Olá, tudo bem?")
var nome = window.prompt("Qual o seu nome?")





function carregar(){
    var pessoa = window.document.getElementById('nome')
    var msg = window.document.getElementById('msg')
    var prazer = window.document.getElementById('status')
    var img = window.document.getElementById('imagem') 
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var periodo = "";

    pessoa.innerHTML = `É um prazer te conhecer ${nome}<br>`

    if (hora>=0 && hora <6){
        var periodo= "Madrugada!"
        img.src = 'imagens/madrugada.png'
        prazer.innerHTML = `Boa Madrugada.`
        document.body.style.background = '#696969'
        document.body.style.backgroundImage = "url(imagens/bg-madrugada.jpg)"
    }else if(hora>=6 && hora <12){
        var periodo= "Manhã!"
        img.src = 'imagens/manha.png' 
        prazer.innerHTML = `Bom Dia.`       
        document.body.style.background = '#FFD700'   
        document.body.style.backgroundImage = "url(imagens/bg-manha.jpg)"    
    }   else if(hora >=12 && hora <=18){
        var periodo= "Tarde!"
        img.src = 'imagens/tarde.png'
        prazer.innerHTML = `Boa Tarde.`
        document.body.style.background ='#FFA500'
        document.body.style.backgroundImage = "url(imagens/bg-tarde.jpg)"         
    }else {
        var periodo= "Noite!"
        img.src='imagens/noite.png'
        prazer.innerHTML = `Boa Noite.`
        document.body.style.background = '#1C1C1C'
        document.body.style.backgroundImage = "url(imagens/bg-noite.jpg"
    }
    
    if(hora < 10) hora = "0" + hora;
    if( minutos < 10 ) minutos = "0" + minutos;
    if( segundos < 10 ) segundos = "0" + segundos;
    
    msg.innerHTML =`Agora são ${hora}:${minutos}:${segundos} da ${periodo}`
}

setInterval(carregar,1000);