// eslint-disable-next-line import/prefer-default-export
export const t = format =>
  format.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_, a, b) => a || b.slice(1))

