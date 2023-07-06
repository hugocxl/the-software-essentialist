import { fizzbuzz } from './fizzbuzz'

describe('fizzbuzz', () => {
  it('should be defined', () => {
    expect(fizzbuzz).toBeDefined()
  })

  it('should return a string', () => {
    expect(typeof fizzbuzz()).toEqual('string')
  })
})
