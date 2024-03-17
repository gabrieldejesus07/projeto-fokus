const html = document.querySelector('html')
const focoButton = document.querySelector('.app__card-button--foco')
const curtoButton = document.querySelector('.app__card-button--curto')


focoButton.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'foco')
})

curtoButton.addEventListener('click', () =>{
    html.setAttribute('data-contexto', "descanso-curto")
})