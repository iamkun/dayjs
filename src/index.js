const weeks = ['日', '一', '二', '三', '四', '五', '六']

class Moment {
  constructor(arg = new Date().getTime()) {
    this.date = new Date(arg)
  }

  toString() {
    return this.date.toDateString()
  }
}

export default () => {
  return new Moment()
}