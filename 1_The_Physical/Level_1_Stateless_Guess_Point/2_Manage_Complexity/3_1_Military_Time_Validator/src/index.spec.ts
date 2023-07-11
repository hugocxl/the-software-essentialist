import { MilitaryTimeValidator } from './index'

const examples = {
  timeFormat: {
    valid: ['01:12 - 14:32', '22:00 - 23:12', '16:43 - 00:19'],
    invalid: [
      'house',
      '1800',
      '21:00',
      '1800 - 2240',
      '1800 - 22:00',
      '8:00 - 22:00',
      '08:00 - 22:0',
    ],
  },
  militaryTime: {
    invalid: [
      '25:00 - 18:00',
      '17:64 - 18:00',
      '17:24 - 25:00',
      '17:24 - 22:87',
    ],
    valid: ['01:12 - 14:32', '22:00 - 23:12', '16:43 - 00:19'],
  },
}

describe('MilitaryTimeValidator', () => {
  describe('knows whether a string is in a time range format', () => {
    it.each(examples.timeFormat.invalid)(
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
  describe('knows whether a input is a military time range', () => {
    it.each(examples.militaryTime.invalid)(
      'knows that "%s" is not a military time range',
      (input) => {
        const output = MilitaryTimeValidator.validate(input)

        expect(output).toBeFalsy()
      }
    )
    it.each(examples.militaryTime.valid)(
      'knows that "%s" is a military time range',
      (input) => {
        const output = MilitaryTimeValidator.validate(input)

        expect(output).toBeTruthy()
      }
    )
  })
})
