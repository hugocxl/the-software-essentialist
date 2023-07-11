export class MilitaryTimeValidator {
  private static isMilitaryTime(time: string): boolean {
    const [hour, minutes] = time.split(':')

    return Number(hour) < 24 && Number(minutes) < 60
  }

  public static validate(timeRange: string): boolean {
    const [startTime, endTime] = timeRange.split(' - ')
    const isValidStartTime =
      Boolean(startTime) && this.isMilitaryTime(startTime)
    const isValidEndTime = Boolean(endTime) && this.isMilitaryTime(endTime)

    return isValidStartTime && isValidEndTime
  }
}
