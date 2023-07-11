# Stats Calculator

## Responsabilities

Stats calculator is able to process a sequence of integers to determine:

- Minimum Value
- Maximum Value
- Number of elements in the sequence
- Average value

## Examples

### Minimum value

- Input: [1,2,3,4,5]
- Output: 1

- Input: [12,32,63,4,52]
- Output: 4

### Maximum value

- Input: [1,2,3,4,5]
- Output: 5

- Input: [12,32,63,4,52]
- Output: 63

### Average value

- Input: [12,32,63,4,52]
- Output: 32.6

## Design

```ts
interface StatsResult {
  min: number
  max: number
  average: number
  count: number
}

interface StatsCalculator {
  calculate(values: number[]): StatsResult
}
```
