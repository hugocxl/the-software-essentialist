import { fizzbuzz } from './fizzbuzz'

describe('fizzbuzz', () => {
  it('should be defined', () => {
    expect(fizzbuzz).toBeDefined()
  })

  it('should return a string', () => {
    expect(typeof fizzbuzz(0)).toEqual('string')
  })

  it('should admit a number a return it as a string', () => {
    expect(fizzbuzz(1)).toEqual('1')
  })

  it('should throw an error if the number is not between 1 and 100', () => {
    expect(fizzbuzz(101)).toThrowError()
    expect(fizzbuzz(0)).toThrowError()
  })
})
