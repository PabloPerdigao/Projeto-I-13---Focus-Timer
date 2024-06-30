import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'

export function countDown() {
  if(!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)


  //decrementar 1 segundo
    seconds--

  // verificar se segundo < 0 adicionar 59
    if(seconds < 0) {
      seconds = 59

      //decrementar 1 segundo
        minutes --
    }

  // verificar se minutos < 0 resetar o seu valor e depois reiniciar 
    if(minutes < 0) {
      reset()
      return
    }


    updateDisplay(minutes, seconds)
    
    setTimeout(() => countDown(), 1000)

    /* 
      recursão - função que é chamada de volta e que necessita de um parâmentro a ser determinada para parar a mesma em determinado momento
      setTimeout - função callback ( função determinada em outro momento, podendo ser posteriormente chamada )
    */
}

export function updateDisplay(minutes, seconds) {
  /* nullish coalesing operator*/ 
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  /* preenchendo com 0 */
  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")


}