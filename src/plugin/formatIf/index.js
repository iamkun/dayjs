/**
 * Enhanced dayjs().format() function: Only formats if the instance is valid,
 * returning a default if not.
 *
 * Signature:
 *
 * `dayjs().formatIf(formatStr, invalidResponse)`
 *
 * - formatStr is the format string taken by `format()`
 * - invalidResponse is returned in case dayjs().isValid() returns false
 *
 * Example:
 *
 * <code>
 * import formatIf from 'dayjs/plugin/formatIf';
 * dayjs.extend(formatIf);
 *
 * // .....
 * dayjs('2022-03-29').formatIf('DD.MM.YYYY', '-'); // returns "-"
 * dayjs('2022-03-28').formatIf('DD.MM.YYYY', '-'); // returns "28.03.2022"
 * </code>
 */
export default (option, dayjsClass) => {
  dayjsClass.prototype.formatIf = function (formatStr, invalidResponse = '') {
    return this.isValid() ? this.format(formatStr) : invalidResponse
  }
}
