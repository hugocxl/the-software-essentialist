import { PalindromeChecker } from './index'

describe('palindrome checker', () => {
  it('should exist', () => {
    const palindromeChecker = new PalindromeChecker()

    expect(palindromeChecker).toBeDefined()
  })

  it('should have a check method', () => {
    const palindromeChecker = new PalindromeChecker()

    expect(palindromeChecker.check).toBeDefined()
  })
})
