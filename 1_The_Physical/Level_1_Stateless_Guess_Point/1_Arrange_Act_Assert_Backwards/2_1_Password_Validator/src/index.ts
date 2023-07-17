interface Result {
  result: boolean
  errors: string[]
}

export class PasswordValidator {
  private static checkLength(str: string): boolean {
    return str.length >= 5 && str.length <= 15
  }

  private static checkCharacters(str: string): boolean {
    return /\d/.test(str) && /[A-Z]/.test(str)
  }

  public static validate(str: string): Result {
    const errors: string[] = []

    if (!this.checkLength(str)) errors.push('InvalidLengthError')
    if (!this.checkCharacters(str)) errors.push('InvalidCharactersError')

    return {
      result: Boolean(!errors.length),
      errors,
    }
  }
}
