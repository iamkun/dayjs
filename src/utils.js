export const padStart = (string, length, pad) => {
  if (!string || string.length >= length) return string
  return `${Array((length + 1) - string.length).join(pad)}${string}`
}

export const isNumber = n => (!Number.isNaN(parseFloat(n)) && Number.isFinite(n))

