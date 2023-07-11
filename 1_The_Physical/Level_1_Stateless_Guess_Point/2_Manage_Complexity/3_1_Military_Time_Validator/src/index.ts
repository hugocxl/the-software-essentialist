export class MilitaryTimeValidator {
  public static validate(timeRange: string): boolean {
    const [startTime, endTime] = timeRange.split(' - ')

    return (
      timeRange.includes('-') &&
      startTime.includes(':') &&
      endTime.includes(':') &&
      Number(startTime.split(':')[0]) < 24 &&
      Number(startTime.split(':')[1]) < 60 &&
      Number(endTime.split(':')[0]) < 24
    )
  }
}
