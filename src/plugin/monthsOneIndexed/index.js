export default (option, dayjsClass, dayjsFactory) => {
    // override dayjs().month()
    const baseMonthFn = dayjsClass.prototype.month;
    dayjsClass.prototype.month = function (args) {
        if (args === undefined) {
            return baseMonthFn.bind(this)(args) + 1;
        } else {
            args = args - 1;
            return baseMonthFn.bind(this)(args);
        }
    }
}
