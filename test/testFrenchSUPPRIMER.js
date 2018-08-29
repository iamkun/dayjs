import dayjs from '../src'
import '../src/locale/fr' // load on demand

dayjs.locale('fr') // use Spanish locale globally

console.log(dayjs().format('LTS'))
console.log(dayjs().format('LT'))
console.log(dayjs().format('L'))
console.log(dayjs().format('LL'))
console.log(dayjs().format('LLL'))
console.log(dayjs().format('LLLL'))
