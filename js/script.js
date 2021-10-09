import Countdown from './countdown.js'

const tempoParaOWBB = new Countdown('25 December 2021 00:00:00 GMT-0300')
const tempos = document.querySelectorAll('[data-time]')
function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOWBB.total[index]
  })
}
mostrarTempo()
setInterval(mostrarTempo, 1000)
