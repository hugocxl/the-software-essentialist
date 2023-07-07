export class PalindromeChecker {
  public static check(str: string) {
    if (str.split('').reverse().join('') === str) return true

    return false
  }
}
