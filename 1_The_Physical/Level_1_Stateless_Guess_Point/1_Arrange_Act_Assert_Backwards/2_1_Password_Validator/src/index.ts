export class PasswordValidator {
  public static validate(str: string) {
    return {
      result: false,
      errors: ['InvalidLengthError'],
    }
  }
}
