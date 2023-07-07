export class PalindromeChecker {
  public static check(str: string) {
    const lowerCaseStr = str.toLowerCase().replace(/\s/g, '')

    if (lowerCaseStr.split('').reverse().join('') === lowerCaseStr) return true

    return false
  }
}
