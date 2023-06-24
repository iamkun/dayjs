export default (o, c, d) => {
  const sortBy = (method, dates) => {
    if (
      !dates ||
      !dates.length ||
      (dates.length === 1 && !dates[0]) ||
      (dates.length === 1 && Array.isArray(dates[0]) && !dates[0].length)
    ) {
      return null
    }
    if (dates.length === 1 && dates[0].length > 0) {
      [dates] = dates
    }
    dates = dates.filter(date => date)
    let result;
    [result] = dates
    for (let i = 1; i < dates.length; i += 1) {
      if (!dates[i].isValid() || dates[i][method](result)) {
        result = dates[i]
      }
    }
    return result
  }

  d.max = function () {
    const args = [].slice.call(arguments, 0) // eslint-disable-line prefer-rest-params
    return sortBy('isAfter', args)
  }
  d.min = function () {
    const args = [].slice.call(arguments, 0) // eslint-disable-line prefer-rest-params
    return sortBy('isBefore', args)
  }
}

