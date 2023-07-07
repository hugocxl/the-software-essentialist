import { PalindromeChecker } from './index'

describe('palindrome checker', () => {
  it('should exist', () => {
    const palindromeChecker = new PalindromeChecker()

    expect(palindromeChecker).toBeDefined()
  })

  it('should have a check method', () => {
    expect(PalindromeChecker.check).toBeDefined()
  })

  it('should admit a string', () => {
    expect(() => PalindromeChecker.check('test')).not.toThrowError()
  })
})
