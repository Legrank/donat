import { donatList, createDonatItem } from './domatList'
import { DonatCount } from './donatCount'
import { moment } from './setting'
export class App {
  #donatListRoot
  #donatCount
  constructor(donats) {
    this.donats = donats
    this.#donatListRoot = document.querySelector('.donates-container__donates')
    const donatBtn = document.querySelector('.donate-form__submit-button')
    donatBtn.addEventListener('click', this.addDonat.bind(this))
    this.#donatCount = new DonatCount(donats)
    this.renderDonatList()
  }
  renderDonatList() {
    donatList(this.donats).forEach((element) => {
      this.#donatListRoot.append(element)
    })
  }
  addDonatList(donat) {
    this.donats.push(donat)
    this.#donatListRoot.append(createDonatItem(donat))
  }
  addDonat(e) {
    e.preventDefault()
    const inputDonate = document.querySelector('.donate-form__donate-input')
    const donatValue = inputDonate.value
    inputDonate.value = ''
    const donatDate = moment(Date.now())
    const donat = { date: donatDate, sum: donatValue }
    this.addDonatList(donat)
    this.#donatCount.add(donat.sum)
  }
}
