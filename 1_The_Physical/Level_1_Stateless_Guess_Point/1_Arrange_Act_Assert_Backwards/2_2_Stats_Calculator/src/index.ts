export class StatsCalculator {
  public static calculate(sequence: number[]) {
    const min = sequence.reduce((min, current) =>
      current < min ? current : min
    )

    return {
      min,
      max: 0,
      average: 0,
      count: 0,
    }
  }
}
