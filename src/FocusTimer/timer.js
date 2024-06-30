import state from './state.js'
import * as el from './elements.js'

export function countDown() {
  if(!state.isRunning) {
    return
  }

  console.log('iniciou')

  // recursão - função callback que necessita de um parâmentro para ser determinada a parar em determinado momento
   setTimeout(() => countDown(), 1000)
  
}

export function updateDisplay(minutes, seconds) {
  /* nullish coalesing operator*/ 
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  /* preenchendo com 0 */
  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")


}