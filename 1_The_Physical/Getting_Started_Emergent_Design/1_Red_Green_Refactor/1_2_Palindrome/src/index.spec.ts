import { PalindromeChecker } from './index'

describe('palindrome checker', () => {
  it('should exist', () => {
    expect(PalindromeChecker).toBeDefined()
  })

  it('should have a check method', () => {
    expect(PalindromeChecker.check).toBeDefined()
  })

  it('should admit a string', () => {
    expect(() => PalindromeChecker.check('test')).not.toThrowError()
  })

  it('should return a boolean', () => {
    expect(typeof PalindromeChecker.check('test')).toBe('boolean')
  })

  test.each([
    { value: 'bill', expected: false },
    { value: 'cat', expected: false },
    { value: 'mom', expected: true },
    { value: 'Wow', expected: true },
    { value: 'Was It A Rat I Saw', expected: true },
    { value: 'Not a palindrome', expected: false },
  ])(
    'when checking "$value" it should return "$expected"',
    ({ value, expected }) => {
      expect(PalindromeChecker.check(value)).toBe(expected)
    }
  )
})
