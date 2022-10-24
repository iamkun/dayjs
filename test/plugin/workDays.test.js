
import dayjs from '../../src'
import MockDate from 'mockdate'
import workDays from '../../src/plugin/workDays'

dayjs.extend(workDays)
beforeEach(() => {
    MockDate.set(new Date())
})
afterEach(() => {
    MockDate.reset()
})
describe("weekEnd",()=>{
    it('Full weekEnd',()=>{
        const dates=dayjs("2022/10/24").workDays("2022/10/30")
        expect(dates)
    })
    it('Incomplete weekEnd',()=>{
        const dates=dayjs("2022/10/24").workDays("2022/10/30",[0])
        expect(dates)
    })
    it('reverse',()=>{
        const dates=dayjs("2022/10/30").workDays("2022/10/24")
        expect(dates)
    })
    it('vacations',()=>{
        const dates=dayjs("2022/10/01").workDays("2022/10/12",[0,6],["2022/10/01","2022/10/02","2022/10/03","2022/10/04","2022/10/05","2022/10/06","2022/10/07"])
        expect(dates)
    })
    it('overtime',()=>{
        const dates=dayjs("2022/10/01").workDays("2022/10/12",[0,6],["2022/10/01","2022/10/02","2022/10/03","2022/10/04","2022/10/05","2022/10/06","2022/10/07"],["2022/10/08","2022/10/09"])
        expect(dates)
    })
})

