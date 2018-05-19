import UTCDate, { LOCAL_TIMEZONE_OFFSET } from '../../../src/plugin/utc/UTCDate'

const sameResProperties = [
  'toDateString', 'toLocaleString', 'toLocaleDateString', 'toLocaleTimeString',
  'getDate', 'getDay', 'getFullYear', 'getHours', 'getMilliseconds', 'getMinutes', 'getMonth', 'getSeconds', 'getYear', 'valueOf', 'getTime'
]

it('creating without timezone', () => {
  let date = new Date()
  let utcDate = new UTCDate(date)

  sameResProperties.forEach((key) => {
    expect(utcDate[key]()).toBe(date[key]())
  })

  date = new Date('2018-04-05T16:13:14')
  utcDate = new UTCDate(date)

  sameResProperties.forEach((key) => {
    expect(utcDate[key]()).toBe(date[key]())
  })

  date = new Date('2018-04-05T16:13:14+0000')
  utcDate = new UTCDate(date)

  sameResProperties.forEach((key) => {
    expect(utcDate[key]()).toBe(date[key]())
  })

  const dateArr = [
    new Date(),
    new UTCDate(),
    new Date()
  ]

  expect(dateArr[0].getTime() <= dateArr[1].getTime()).toBe(true)
  expect(dateArr[1].getTime() <= dateArr[2].getTime()).toBe(true)
})

it('creating with timezone', () => {
  const getComp = [
    ['getUTCDate', 'getDate'],
    ['getUTCDay', 'getDay'],
    ['getUTCFullYear', 'getFullYear'],
    ['getUTCHours', 'getHours'],
    ['getUTCMilliseconds', 'getMilliseconds'],
    ['getUTCMinutes', 'getMinutes'],
    ['getUTCMonth', 'getMonth'],
    ['getUTCSeconds', 'getSeconds']
  ]
  const sameP = ['valueOf', 'getTime', 'toISOString', 'toUTCString', 'toGMTString', 'toJSON']

  let date = new Date('2018-04-05T16:13:14+0000')
  let utcDate = new UTCDate(new Date('2018-04-05T16:13:14+0000'), 0)

  getComp.forEach(([utcKey, localKey]) => {
    expect(utcDate[localKey]()).toBe(date[utcKey]())
  })

  getComp.forEach(([utcKey]) => {
    expect(utcDate[utcKey]()).toBe(date[utcKey]())
  })

  sameP.forEach((key) => {
    expect(utcDate[key]()).toBe(date[key]())
  })

  date = new Date('2018-04-05T16:13:14')
  utcDate = new UTCDate(new Date('2018-04-05T16:13:14+0000'), -LOCAL_TIMEZONE_OFFSET)

  getComp.forEach(([utcKey, localKey]) => {
    expect(utcDate[localKey]()).toBe(date[utcKey]())
  })

  sameP.forEach((key) => {
    expect(utcDate[key]() === date[key]()).toBe(LOCAL_TIMEZONE_OFFSET === 0)
  })
})

it('utc set', () => {
  const date = new Date('2018-04-05T16:13:14+0600')
  const utcDate = new UTCDate(new Date('2018-04-05T16:13:14+0600'), 0)

  const UTCSetCmd = [
    ['setUTCDate', 5],
    ['setUTCFullYear', 2000],
    ['setUTCHours', 3],
    ['setUTCMilliseconds', 23],
    ['setUTCMinutes', 45],
    ['setUTCMonth', 6],
    ['setUTCSeconds', 34]
  ]

  UTCSetCmd.forEach(([cmd, value]) => {
    utcDate[cmd](value)
    date[cmd](value)
    expect(utcDate.valueOf()).toBe(date.valueOf())
  })
})

it('timezone set', () => {
  const date = new Date('2018-04-05T16:13:14+0600')
  const utcDate = new UTCDate(new Date('2018-04-05T16:13:14+0600'), 0)

  expect(utcDate.valueOf()).toBe(date.valueOf())

  for (let tz = -720; tz <= 720; tz += 1) {
    utcDate.setTimezoneOffset(tz)

    expect(utcDate.getTimezoneOffset()).toBe(tz)
    expect(utcDate.valueOf()).toBe(date.valueOf())
  }

  utcDate.setTimezoneOffset()

  expect(utcDate.valueOf()).toBe(date.valueOf())
})
