export class MilitaryTimeValidator {
  private static isMilitaryTime(time: string): boolean {
    const [hour, minutes] = time.split(':')
    const isHourValid = Number(hour) < 24 && hour.length === 2
    const areMinutesValid = Number(minutes) < 60 && minutes.length === 2

    return isHourValid && areMinutesValid
  }

  public static validate(timeRange: string): boolean {
    const [startTime, endTime] = timeRange.split(' - ')
    const isValidStartTime =
      Boolean(startTime) && this.isMilitaryTime(startTime)
    const isValidEndTime = Boolean(endTime) && this.isMilitaryTime(endTime)

    return isValidStartTime && isValidEndTime
  }
}
