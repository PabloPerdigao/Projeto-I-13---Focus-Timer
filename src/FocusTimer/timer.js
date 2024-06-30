import state from './state.js'
import * as el from './elements.js'

export function countDown() {
  console.log('iniciou')
}

export function updateDisplay(minutes, seconds) {
  /* nullish coalesing operator*/ 
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  /* preenchendo com 0 */
  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")


}