export class DonatCount {
  #root
  #count
  constructor(donats) {
    this.#count = donats.reduce(
      (donatCount, donat) => donat.sum + donatCount,
      0
    )
    this.#root = document.querySelector('#total-amount')
    this.renderCount()
  }
  add(sum) {
    this.#count += Number(sum)
    this.renderCount()
  }
  renderCount() {
    this.#root.textContent = `${this.#count}$`
  }
}
