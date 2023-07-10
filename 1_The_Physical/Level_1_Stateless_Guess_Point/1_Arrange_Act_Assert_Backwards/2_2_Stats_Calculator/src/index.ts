export class StatsCalculator {
  private static getMin(sequence: number[]) {
    return sequence.reduce((min, current) => (current < min ? current : min))
  }

  private static getMax(sequence: number[]) {
    return sequence.reduce((max, current) => (current > max ? current : max))
  }

  private static getAverage(sequence: number[]) {
    return sequence.reduce((sum, current) => sum + current) / sequence.length
  }

  public static calculate(sequence: number[]) {
    const min = this.getMin(sequence)
    const max = this.getMax(sequence)
    const average = this.getAverage(sequence)
    const count = sequence.length

    return {
      min,
      max,
      average,
      count,
    }
  }
}
