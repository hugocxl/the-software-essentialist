import { PasswordValidator } from './index'

describe('PasswordValidator', () => {
  describe('knows whether a password is too short', () => {
    it.each(['mom', 'cat'])(
      'knows that %p is too short and returns a "TooShortLengthError" error',
      (value) => {
        const result = PasswordValidator.validate(value)

        expect(result.result).toBe(false)
        expect(result.errors[0]).toBe('TooShortLengthError')
      }
    )
  })

  describe('knows whether a password is too long', () => {
    it.each(['incrediblyLongPassword', 'anotherSuperLongPassword'])(
      'knows that %p is too long and returns a "TooLongLengthError" error',
      (value) => {
        const result = PasswordValidator.validate(value)

        expect(result.result).toBe(false)
        expect(result.errors[0]).toBe('TooLongLengthError')
      }
    )
  })
})
