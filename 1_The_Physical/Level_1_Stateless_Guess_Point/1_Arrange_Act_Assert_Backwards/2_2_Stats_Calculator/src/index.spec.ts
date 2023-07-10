import { StatsCalculator } from './index'

describe('StatsCalculator', () => {
  describe('knows how to find the min value in a serie', () => {
    it('should output "1" when the serie is [1, 2, 3, 4]', () => {
      const output = StatsCalculator.calculate([1, 2, 3, 4])

      expect(output.min).toEqual(1)
    })
  })
})
