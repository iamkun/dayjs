const isNode = (typeof global !== 'undefined' && {}.toString.call(global) === '[object global]')
const globalSpace = (isNode) ? global : window

function loadScript(src) {
  if (isNode) return
  const xhrObj = new window.XMLHttpRequest()
  xhrObj.open('GET', src, false)
  xhrObj.send('')
  const se = window.document.createElement('script')
  se.type = 'text/javascript'
  se.text = xhrObj.responseText
  window.document.head.appendChild(se)
}

export default function () {
  // uses feature detection from polyfilll in quesiton
  if (globalSpace.Intl && globalSpace.Intl.DateTimeFormat
        && !globalSpace.Intl._DateTimeFormatTimeZone) { // eslint-disable-line no-underscore-dangle
    loadScript('https://unpkg.com/date-time-format-timezone@latest/build/browserified/date-time-format-timezone-complete-min.js')
  }
}
