export function fizzbuzz(n: number): string {
  if (n < 1 || n > 100) {
    throw new Error('n must be between 1 and 100')
  }

  if (n % 3 === 0) {
    return 'Fizz'
  }

  return String(n)
}
