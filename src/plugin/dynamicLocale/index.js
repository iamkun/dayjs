function extendLocaleFn(orgFn) {
  return function (...theArgs) {
    if (typeof theArgs[0] === 'string' && theArgs.length === 1) {
      // eslint-disable-next-line no-empty, global-require, import/no-dynamic-require
      try { require(`../../locale/${theArgs[0]}`) } catch (e) {}
    }
    return orgFn.apply(this, theArgs)
  }
}

export default (option, dayjsClass, dayjsFactory) => {
  dayjsFactory.locale = extendLocaleFn(dayjsFactory.locale)
  dayjsClass.prototype.locale = extendLocaleFn(dayjsClass.prototype.locale)
}
