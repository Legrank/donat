import { moment } from './setting'
import { createElement } from './utils '
export function donatList(donats) {
  return donats.map((donat) => createDonatItem(donat))
}
export function createDonatItem(donat) {
  const date = moment(donat.date)
  const content = `${date.format('LLL')} - <b>${donat.sum}$</b>`
  const donstItem = createElement('div', content, 'donate-item')
  return donstItem
}
