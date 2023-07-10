import { StatsCalculator } from './index'

describe('StatsCalculator', () => {
  describe('knows how to find the min value in a serie', () => {
    it.each([
      { input: [1, 2, 3, 4], expected: 1 },
      { input: [11, 6, 31, 4], expected: 4 },
    ])(
      'should output $expected when the serie is $input',
      ({ input, expected }) => {
        const output = StatsCalculator.calculate(input)

        expect(output.min).toEqual(expected)
      }
    )
  })
  describe('knows how to find the max value in a serie', () => {
    it.each([
      { input: [1, 2, 3, 4], expected: 4 },
      { input: [11, 6, 31, 4], expected: 31 },
    ])(
      'should output $expected when the serie is $input',
      ({ input, expected }) => {
        const output = StatsCalculator.calculate(input)

        expect(output.max).toEqual(expected)
      }
    )
  })
  describe('knows how to calculate the total number of elements in a serie', () => {
    it.each([
      { input: [9, 1, 6, 3, 4], expected: 5 },
      { input: [6, 31, 4], expected: 3 },
    ])(
      'should output $expected when the serie is $input',
      ({ input, expected }) => {
        const output = StatsCalculator.calculate(input)

        expect(output.count).toEqual(expected)
      }
    )
  })
  describe('knows how to calculate the average in a serie', () => {
    it.each([
      { input: [1, 2, 3, 4], expected: 2.5 },
      { input: [11, 6, 31, 4], expected: 13 },
    ])(
      'should output $expected when the serie is $input',
      ({ input, expected }) => {
        const output = StatsCalculator.calculate(input)

        expect(output.average).toEqual(expected)
      }
    )
  })
})
