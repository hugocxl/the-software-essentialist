export class MilitaryTimeValidator {
  public static validate(timeRange: string): boolean {
    const [startTime, endTime] = timeRange.split(' - ')

    return (
      timeRange.includes('-') &&
      startTime.includes(':') &&
      endTime.includes(':') &&
      Number(startTime.split(':')[0]) < 24
    )
  }
}
