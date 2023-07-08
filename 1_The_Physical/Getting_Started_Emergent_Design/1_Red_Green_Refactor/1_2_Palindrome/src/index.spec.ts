import { PalindromeChecker } from './index'

describe('PalindromeChecker', () => {
  describe('recognizes simple words as palindromes ignoring case', () => {
    it.each(['mom', 'Wow'])('knows that "%s" is a palindrome', (value) => {
      expect(PalindromeChecker.check(value)).toBe(true)
    })

    it.each(['bill', 'House'])(
      'knows that "%s" is not a palindrome',
      (value) => {
        expect(PalindromeChecker.check(value)).toBe(false)
      }
    )
  })

  describe('recognizes sentences as palindromes ignoring case', () => {
    it.each(['Was It A Rat I Saw'])(
      'knows that "%s" is a palindrome',
      (value) => {
        expect(PalindromeChecker.check(value)).toBe(true)
      }
    )

    it.each(['Hello world!'])(
      'knows that "%s" is not a palindrome',
      (value) => {
        expect(PalindromeChecker.check(value)).toBe(false)
      }
    )
  })
})
