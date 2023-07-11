import { MilitaryTimeValidator } from './index'

const examples = {
  timeFormat: {
    valid: ['01:12 - 14:32', '22:00 - 23:12', '16:43 - 00:19'],
    incorrect: ['house', '1800', '21:00', '1800 - 2240', '1800 - 22:00'],
  },
}

describe('MilitaryTimeValidator', () => {
  describe('knows whether a string is in a time range format', () => {
    it.each(examples.timeFormat.incorrect)(
      'knows that "%s" is not in a time range format',
      (input) => {
        const output = MilitaryTimeValidator.validate(input)

        expect(output).toBeFalsy()
      }
    )
    it.each(examples.timeFormat.valid)(
      'knows that "%s" is in a time range format',
      (input) => {
        const output = MilitaryTimeValidator.validate(input)

        expect(output).toBeTruthy()
      }
    )
  })
})
