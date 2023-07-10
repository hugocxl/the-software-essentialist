export class StatsCalculator {
  public static calculate(sequence: number[]) {
    const min = sequence.reduce((min, current) =>
      current < min ? current : min
    )
    const max = sequence.reduce((max, current) =>
      current > max ? current : max
    )

    const count = sequence.length

    const average = sequence.reduce((sum, current) => sum + current) / count

    return {
      min,
      max,
      average,
      count,
    }
  }
}
