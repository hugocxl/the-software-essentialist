# Military Time Validator

## Requirements

Write a function (or a stateless class) capable of validating whether a string time range is a valid military time range or not.

## Responsabilities

- It should know whether a string is in a time range format or not
- It should know whether a string time range is a valid military time range or not.

## Examples

### False

- "house"
- "21:00"
- "25:00 - 12:23"

### True

- "01:12 - 14:32"
- "22:00 - 23:12"
- "16:43 - 00:19"

## API Design (Upfront)

```ts
interface MilitaryTimeValidator {
  validate(timeRange: string): boolean
}

const output = MilitaryTimeValidator.validate(input)
```
