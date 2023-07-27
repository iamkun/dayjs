const enGreet = (i) => {
  const hour = i.hour()
  if (hour >= 4 && hour < 12) {
    return 'Good morning%s' // (4:00 - 11:59)
  } else if (hour >= 12 && hour < 18) {
    return 'Good afternoon%s' // (12:00 - 17:59)
  }
  return 'Good evening%s'
}

export default (options, dayjsClass) => {
  dayjsClass.prototype.greet = function (suffix = '') {
    const instance = this
    const locale = this.$locale()

    const greetLocale = locale.greet || enGreet

    return greetLocale(instance).replace('%s', suffix)
  }
}
