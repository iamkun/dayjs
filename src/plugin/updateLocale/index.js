import utils from '../../utils';

export default (option, Dayjs, dayjs) => {
  dayjs.updateLocale = function (locale, customConfig) {
    const localeList = dayjs.Ls
    const localeConfig = localeList[locale]
    if (!localeConfig) return
    const customConfigKeys = customConfig ? Object.keys(customConfig) : []
    customConfigKeys.forEach((c) => {
      localeConfig[c] = typeof localeConfig[c] === 'object' ? utils.e(localeConfig[c], customConfig[c]) : customConfig[c]
    })
    return localeConfig // eslint-disable-line consistent-return
  }
}

