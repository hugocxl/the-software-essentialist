describe('PasswordValidator', () => {
  test('knows that "mom" is too short and returns a "InvalidLengthError" error', () => {
    const result = PasswordValidator.validate('mom')

    expect(result.result).toBe(false)
    expect(result.errors[0]).toBe('InvalidLengthError')
  })
})
