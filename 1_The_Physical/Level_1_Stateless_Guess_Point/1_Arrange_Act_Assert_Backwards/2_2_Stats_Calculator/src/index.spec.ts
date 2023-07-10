import { StatsCalculator } from './index'

describe('StatsCalculator', () => {
  describe('knows how to find the min value in a serie', () => {
    it('should output "1" when the serie is [1, 2, 3, 4]', () => {
      const output = StatsCalculator.calculate([1, 2, 3, 4])

      expect(output.min).toEqual(1)
    })
    it('should output "4" when the serie is [11, 6, 31, 4]', () => {
      const output = StatsCalculator.calculate([11, 6, 31, 4])

      expect(output.min).toEqual(4)
    })
  })
  describe('knows how to find the max value in a serie', () => {
    it('should output "4" when the serie is [1, 2, 3, 4]', () => {
      const output = StatsCalculator.calculate([1, 2, 3, 4])

      expect(output.max).toEqual(4)
    })
  })
})
