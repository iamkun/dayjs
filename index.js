import dayjs from './src'
const base = dayjs('20180101')
const year = base.year()
const another = base.clone()
another.set('year', year + 1)
console.log(base.toString())
console.log(another.toString())
