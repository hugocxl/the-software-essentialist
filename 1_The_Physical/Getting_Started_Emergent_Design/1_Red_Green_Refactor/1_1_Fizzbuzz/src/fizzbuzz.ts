export const FIZZBUZZ = 'FizzBuzz'
export const FIZZ = 'Fizz'
export const BUZZ = 'Buzz'

export function fizzbuzz(n: number): string {
  if (n < 1 || n > 100) {
    throw new Error(`${n} must be between 1 and 100`)
  }

  const isMultipleOf3 = n % 3 === 0
  const isMultipleOf5 = n % 5 === 0

  if (isMultipleOf3 && isMultipleOf5) return FIZZBUZZ
  if (isMultipleOf3) return FIZZ
  if (isMultipleOf5) return BUZZ

  return String(n)
}
