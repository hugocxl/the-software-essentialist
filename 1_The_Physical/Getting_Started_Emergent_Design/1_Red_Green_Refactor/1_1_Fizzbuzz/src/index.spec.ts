import { fizzbuzz } from './fizzbuzz'

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
  })

  it('should return Fizz for multiples of 3', () => {
    expect(fizzbuzz(3)).toEqual('Fizz')
    expect(fizzbuzz(9)).toEqual('Fizz')
    expect(fizzbuzz(27)).toEqual('Fizz')
  })

  it('should return Buzz for multiples of 5', () => {
    expect(fizzbuzz(5)).toEqual('Buzz')
    expect(fizzbuzz(25)).toEqual('Buzz')
    expect(fizzbuzz(20)).toEqual('Buzz')
  })
})
