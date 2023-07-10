export class StatsCalculator {
  public static calculate(sequence: number[]) {
    const min = sequence.reduce((min, current) =>
      current < min ? current : min
    )
    const max = sequence.reduce((max, current) =>
      current > max ? current : max
    )

    return {
      min,
      max,
      average: 0,
      count: 0,
    }
  }
}
