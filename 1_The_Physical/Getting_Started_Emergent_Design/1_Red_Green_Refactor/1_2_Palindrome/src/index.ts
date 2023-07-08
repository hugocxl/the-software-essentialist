export class PalindromeChecker {
  private static reverseString(str: string) {
    return str.split('').reverse().join('')
  }

  private static cleanUpString(str: string) {
    return str.toLowerCase().replace(/\s/g, '')
  }

  public static check(str: string) {
    const cleanedUpString = this.cleanUpString(str)
    const reversedString = this.reverseString(cleanedUpString)

    return reversedString === cleanedUpString
  }
}
