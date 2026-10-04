export default (o, c, d) => {
  const sortBy = (method, dates) => {
    if (dates.length === 1 && Array.isArray(dates[0])) {
      [dates] = dates
    }
    let result = null
    for (let i = 0; i < dates.length; i += 1) {
      const date = dates[i]
      if (date && (!result || !date.isValid() || date[method](result))) {
        result = date
      }
    }
    return result
  }

  d.max = function () {
    return sortBy('isAfter', arguments) // eslint-disable-line prefer-rest-params
  }
  d.min = function () {
    return sortBy('isBefore', arguments) // eslint-disable-line prefer-rest-params
  }
}
