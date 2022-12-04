export function createElement(tag, content, ...className) {
  const el = document.createElement(tag)
  if (content) {
    el.innerHTML = content
  }
  el.classList.add(...className)
  return el
}
