export default (o, c) => {
  const proto = c.prototype

  const pluralAliases = [
    'milliseconds',
    'seconds',
    'minutes',
    'hours',
    'days',
    'weeks',
    'isoWeeks',
    'months',
    'quarters',
    'years',
    'dates'
  ]

  pluralAliases.forEach((alias) => {
    proto[alias] = proto[alias.replace(/s$/, '')]
  })
}
