export default (option, Dayjs, dayjs) => {
  dayjs.updateLocale = function (locale, customConfig) {
    const localeList = dayjs.Ls
    const localeConfig = localeList[locale]
    if (!localeConfig) return
    const customConfigKeys = customConfig ? Object.keys(customConfig) : []
    customConfigKeys.forEach((c) => {
      const originConfig = localeConfig[c]
      const customOriginConfig = customConfig[c]
      if (originConfig !== null && typeof originConfig === 'object' && typeof customOriginConfig === 'object') {
        localeConfig[c] = {
          ...originConfig,
          ...customOriginConfig
        }
      } else {
        localeConfig[c] = customOriginConfig
      }
    })
    return localeConfig // eslint-disable-line consistent-return
  }
}

