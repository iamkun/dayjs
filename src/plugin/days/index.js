export default (option, dayjsClass, dayjsFactory) => {
  const proto = dayjsClass.prototype

  proto.days = function (lastDateStr) {
    let current = this
    const lastDate = dayjsFactory(lastDateStr)
    const days = []

    const isInRange = () => current.isBefore(lastDate) || current.isSame(lastDate)

    while (isInRange()) {
      days.push(current)
      current = current.add(1, 'day')
    }

    return days
  }
}
