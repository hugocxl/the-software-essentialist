import { fizzbuzz, FIZZBUZZ, FIZZ, BUZZ } from './fizzbuzz'

describe('fizzbuzz', () => {
  it('should be defined', () => {
    expect(fizzbuzz).toBeDefined()
  })

  it('should return a string', () => {
    expect(typeof fizzbuzz(1)).toEqual('string')
  })

  it('should admit a number a return it as a string', () => {
    expect(fizzbuzz(1)).toEqual('1')
  })

  it('should throw an error if the number is not between 1 and 100', () => {
    expect(() => fizzbuzz(0)).toThrowError()
    expect(() => fizzbuzz(101)).toThrowError()
  })

  test.each([
    { value: 3, expected: FIZZ },
    { value: 42, expected: FIZZ },
    { value: 5, expected: BUZZ },
    { value: 25, expected: BUZZ },
    { value: 15, expected: FIZZBUZZ },
    { value: 45, expected: FIZZBUZZ },
    { value: 43, expected: '43' },
    { value: 61, expected: '61' },
  ])(
    'should return $expected when the value is $value',
    ({ value, expected }) => {
      expect(fizzbuzz(value)).toBe(expected)
    }
  )
})
