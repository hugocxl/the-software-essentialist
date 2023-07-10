import { PasswordValidator } from './index'

describe('PasswordValidator', () => {
  describe('knows whether the length of a password is correct', () => {
    it.each(['mom', 'cat'])(
      'knows that %p is too short and returns a "InvalidLengthError" error',
      (value) => {
        const result = PasswordValidator.validate(value)

        expect(result.result).toBe(false)
        expect(result.errors.includes('InvalidLengthError')).toBeTruthy()
      }
    )
    it.each(['incrediblyLongPassword', 'anotherSuperLongPassword'])(
      'knows that %p is too long and returns a "InvalidLengthError" error',
      (value) => {
        const result = PasswordValidator.validate(value)

        expect(result.result).toBe(false)
        expect(result.errors.includes('InvalidLengthError')).toBeTruthy()
      }
    )
  })

  describe('knows whether a password contains at least one digit', () => {
    it.each(['software', 'essentialist'])(
      'knows that %p does not contains any digit and returns an "InvalidCharactersError" error',
      (value) => {
        const result = PasswordValidator.validate(value)

        expect(result.result).toBe(false)
        expect(result.errors.includes('InvalidCharactersError')).toBeTruthy()
      }
    )
  })
  describe('knows whether a password contains at least one upper case letter', () => {
    it.each(['software', 'essentialist'])(
      'knows that %p does not contains any upper letter and returns an "InvalidCharactersError" error',
      (value) => {
        const result = PasswordValidator.validate(value)

        expect(result.result).toBe(false)
        expect(result.errors.includes('InvalidCharactersError')).toBeTruthy()
      }
    )
  })

  describe('knows whether a password is valid', () => {
    it.each(['sofFware1', 'eSSentia1ist'])(
      'knows that %p is a valid password',
      (value) => {
        const result = PasswordValidator.validate(value)

        expect(result.result).toBe(true)
        expect(result.errors.length).toBe(0)
      }
    )
  })
})
