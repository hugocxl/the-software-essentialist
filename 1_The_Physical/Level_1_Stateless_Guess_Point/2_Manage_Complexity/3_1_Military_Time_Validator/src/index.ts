export class MilitaryTimeValidator {
  private static isMilitaryTime(time: string): boolean {
    const [hour, minutes] = time.split(':')
    const isHourValid = Number(hour) < 24 && hour.length === 2
    const areMinutesValid = Number(minutes) < 60 && minutes.length === 2

    return isHourValid && areMinutesValid
  }

  private static isValidTime(time: string): boolean {
    return Boolean(time) && this.isMilitaryTime(time)
  }

  public static validate(timeRange: string): boolean {
    const [startTime, endTime] = timeRange.split(' - ')

    return this.isValidTime(startTime) && this.isValidTime(endTime)
  }
}
