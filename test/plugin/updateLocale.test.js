import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import updateLocale from '../../src/plugin/updateLocale'
import localizedFormat from '../../src/plugin/localizedFormat'
import '../../src/locale/zh-cn'

dayjs.extend(updateLocale)
dayjs.extend(localizedFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

const newLocale = {
  months: new Array(12).fill('testMonth'),
  formats: { // formats for dayjs and longDateFormat for momentjs
    LT: '[testFormat]'
  },
  longDateFormat: {
    LT: '[testFormat]'
  }
}

const formatString = 'MMMM LT'

describe('Update locale', () => {
  it('Invalid argument', () => {
    dayjs.updateLocale('InvalidLocaleName', {})
    dayjs.updateLocale('en', {
      invalidConfig: []
    })

    expect(dayjs().format(formatString))
      .toEqual(moment().format(formatString))
  })

  it('Update build-in en locale', () => {
    moment.updateLocale('en', newLocale)
    dayjs.updateLocale('en', newLocale)

    expect(dayjs().format(formatString))
      .toEqual('testMonth testFormat')

    expect(dayjs().format(formatString))
      .toEqual(moment().format(formatString))
  })

  it('Update imported zh-cn locale', () => {
    moment.updateLocale('zh-cn', newLocale)
    dayjs.updateLocale('zh-cn', newLocale)
    dayjs.locale('zh-cn')
    moment.locale('zh-cn')
    expect(dayjs().format(formatString))
      .toEqual('testMonth testFormat')

    expect(dayjs().format(formatString))
      .toEqual(moment().format(formatString))
  })
})
