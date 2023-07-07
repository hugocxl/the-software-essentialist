export class PalindromeChecker {
  private static reverseString(str: string) {
    return str.split('').reverse().join('')
  }

  public static check(str: string) {
    const lowerCaseStr = str.toLowerCase().replace(/\s/g, '')
    const reversedString = this.reverseString(lowerCaseStr)

    if (reversedString === lowerCaseStr) return true

    return false
  }
}
