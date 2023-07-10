import { PasswordValidator } from './index'

describe('PasswordValidator', () => {
  describe('knows whether the length of a password is correct', () => {
    it.each(['mom', 'cat'])(
      'knows that %p is too short and returns a "TooShortLengthError" error',
      (value) => {
        const result = PasswordValidator.validate(value)

        expect(result.result).toBe(false)
        expect(result.errors[0]).toBe('TooShortLengthError')
      }
    )
    it.each(['incrediblyLongPassword', 'anotherSuperLongPassword'])(
      'knows that %p is too long and returns a "TooLongLengthError" error',
      (value) => {
        const result = PasswordValidator.validate(value)

        expect(result.result).toBe(false)
        expect(result.errors[0]).toBe('TooLongLengthError')
      }
    )
  })

  describe('knows whether a password contains at least one digit', () => {
    it.each(['software', 'essentialist'])(
      'knows that %p does not contains any digit and returns an "InvalidCharactersError" error',
      (value) => {
        const result = PasswordValidator.validate(value)

        expect(result.result).toBe(false)
        expect(result.errors[0]).toBe('InvalidCharactersError')
      }
    )
    it.each(['software1', '2essentialist'])(
      'knows that %p contains at least a digit',
      (value) => {
        const result = PasswordValidator.validate(value)

        expect(result.result).toBe(true)
        expect(result.errors.length).toBe(0)
      }
    )
  })
})
