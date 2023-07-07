export class PalindromeChecker {
  public static check (str: string) {
    const lowerCaseStr = str.toLowerCase()

    if (lowerCaseStr.split('').reverse().join('') === lowerCaseStr) return true

    return false
  }
}
