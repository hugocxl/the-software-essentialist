import { fizzbuzz } from './fizzbuzz'

describe('fizzbuzz', () => {
  it('should be defined', () => {
    expect(fizzbuzz).toBeDefined()
  })

  it('should return a string', () => {
    expect(typeof fizzbuzz()).toEqual('string')
  })

  it('should admit a number a return it as a string', () => {
    expect(fizzbuzz(1)).toEqual('1')
  })
})
