export class MilitaryTimeValidator {
  public static validate(timeRange: string): boolean {
    const [startTime, endTime] = timeRange.split(' - ')

    return (
      startTime.includes('-') &&
      startTime.includes(':') &&
      endTime.includes('-') &&
      endTime.includes(':')
    )
  }
}
