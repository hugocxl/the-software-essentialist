import { MilitaryTimeValidator } from './index'

const examples = {
  true: ['01:12 - 14:32', '22:00 - 23:12', '16:43 - 00:19'],
  false: ['house', '21:00', '25:00 - 12:23'],
}

describe('MilitaryTimeValidator', () => {
  describe('knows whether a string is in a time range format', () => {
    it('knows that "" is not in a time range format', () => {
      const output = MilitaryTimeValidator.validate('')

      expect(output).toBeFalsy()
    })
    it('knows that "01:12 - 14:32" is in a time range format', () => {
      const output = MilitaryTimeValidator.validate(examples.true[0])

      expect(output).toBeTruthy()
    })
  })
})
