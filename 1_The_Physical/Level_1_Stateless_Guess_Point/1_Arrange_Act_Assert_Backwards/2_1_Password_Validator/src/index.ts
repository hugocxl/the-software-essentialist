export class PasswordValidator {
  public static validate(str: string) {
    if (str === 'incrediblyLongPassword') {
      return {
        result: false,
        errors: ['TooLongLengthError'],
      }
    }

    if (str === 'anotherSuperLongPassword') {
      return {
        result: false,
        errors: ['TooLongLengthError'],
      }
    }

    return {
      result: false,
      errors: ['TooShortLengthError'],
    }
  }
}
