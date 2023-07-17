# Password Validator

## Responsabilities

- Must know when a password is valid

## Requirements

- Passwords must be between 5 and 15 characters long
- Passwords contains at least one digit
- Passwords contains at least one upper case letter
- Return an object containing a boolean result and an errors key that — when provided with an invalid password — contains an error message or type for all errors in occurrence. There can be multiple errors at a single time.

## Upfront desing

```ts
  interface PasswordValidator {
    public static validate: (password: string) => Result
  }

  interface Result {
    result: boolean
    errors: string[]
  }

  const validationResult = PasswordValidator.validate(password)
```
