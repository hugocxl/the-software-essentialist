export class PasswordValidator {
  public static validate(str: string) {
    if (str.length < 5) {
      return {
        result: false,
        errors: ['TooShortLengthError'],
      }
    }

    if (str.length > 15) {
      return {
        result: false,
        errors: ['TooLongLengthError'],
      }
    }

    return {
      result: true,
      errors: [],
    }
  }
}
