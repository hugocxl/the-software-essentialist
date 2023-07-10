import { PasswordValidator } from './index'

describe('PasswordValidator', () => {
  test('knows that "mom" is too short and returns a "TooShortLengthError" error', () => {
    const result = PasswordValidator.validate('mom')

    expect(result.result).toBe(false)
    expect(result.errors[0]).toBe('TooShortLengthError')
  })

  test('knows that "incrediblyLongPassword" is too long and returns a "TooLongLengthError" error', () => {
    const result = PasswordValidator.validate('incrediblyLongPassword')

    expect(result.result).toBe(false)
    expect(result.errors[0]).toBe('TooLongLengthError')
  })
})
