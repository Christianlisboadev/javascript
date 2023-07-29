//declarando principais variáveis
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

//palco do jogo
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

//criando cronometro

var cronometro = setInterval(() => {
    tempo -= 1

    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }
    else{
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000);

ajustaTamanhoPalcoJogo()

//posição randomica para o mosquito
function posicaoRandomica(){

    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if (vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }
        else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    var posicaoX = (Math.floor(Math.random() * altura)) - 90
    var posicaoY = (Math.floor(Math.random() * largura)) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criar elemento mosquito
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoY + 'px'
    mosquito.style.top = posicaoX + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    

    document.body.appendChild(mosquito)
}


//criar aleatoreidade do tamanho
function tamanhoAleatorio(){
    var tamanho = Math.floor(Math.random() * 3)
    
    switch(tamanho){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}


//criar lado aleatorio
function ladoAleatorio(){
    var lado = Math.floor(Math.random() * 2)

    switch(lado){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
