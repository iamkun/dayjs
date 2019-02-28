import fs from 'fs'
import path from 'path'

const pluginDir = '../../src/plugin'
const pluginTypeDir = '../../types/plugin'

it('Plugin declarations', () => {
  fs.readdirSync(path.join(__dirname, pluginDir))
    .forEach((l) => {
      expect(fs.existsSync(path.join(__dirname, pluginTypeDir, `${l}.d.ts`)))
        .toBe(true)
    })
})
