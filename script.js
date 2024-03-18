const html = document.querySelector('html')
const focoButton = document.querySelector('.app__card-button--foco')
const curtoButton = document.querySelector('.app__card-button--curto')
const longoButton = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const imagemPlayPause = document.querySelector('.app__card-primary-butto-icon')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseButton = document.querySelector('#start-pause')
const musicaFocoImput = document.querySelector('#alternar-musica')
const iniciarPausarButton = document.querySelector('#start-pause span')
const musica = new Audio('sons/luna-rise-part-one.mp3')
const musicaStart = new Audio('sons/play.wav')
const musicaPausa = new Audio('sons/pause.mp3')
const musicaBeep = new Audio('sons/beep.mp3')
musica.loop = true

let tempoDecorridoEmSegundos = 5
let intervaloId = null

musicaFocoImput.addEventListener('change', () => {
    if (musica.paused){
        musica.play()
    }else(
        musica.pause()
    )
})

focoButton.addEventListener('click', () =>{
    alterarContexto('foco')
    focoButton.classList.add('active')
})

curtoButton.addEventListener('click', () =>{
   alterarContexto('descanso-curto')
   curtoButton.classList.add('active')
})

longoButton.addEventListener('click', () =>{
    alterarContexto('descanso-longo')
    longoButton.classList.add('active')
})

function alterarContexto(contexto){
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;

        case 'descanso-curto':
            titulo.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;

        case 'descanso-longo':
            titulo.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;
    
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <=0){
        musicaBeep.play()
        alert('Tempo finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log(tempoDecorridoEmSegundos)

}

startPauseButton.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar(){
    if(intervaloId){
        musicaPausa.play()
        zerar()
        return
    }
    musicaStart.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarPausarButton.textContent = "Pausar"
    imagemPlayPause.setAttribute('src', './imagens/pause.png')
}

function zerar(){
    clearInterval(intervaloId)
    iniciarPausarButton.textContent = "Começar"
    imagemPlayPause.setAttribute('src', './imagens/play_arrow.png')
    intervaloId = null
}






