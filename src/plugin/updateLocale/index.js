export default (option, Dayjs, dayjs) => {
  dayjs.updateLocale = function (locale, customConfig) {
    const localeList = dayjs.Ls
    const localeConfig = localeList[locale]
    const customConfigKeys = Object.keys(customConfig)
    if (!localeConfig || customConfigKeys.length === 0) return
    customConfigKeys.forEach((c) => {
      localeConfig[c] = customConfig[c]
    })
  }
}

