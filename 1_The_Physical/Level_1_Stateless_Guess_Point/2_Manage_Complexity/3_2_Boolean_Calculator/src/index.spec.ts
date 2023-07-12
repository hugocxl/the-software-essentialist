import { BooleanCalculator } from './index'

const EXAMPLES = {
  simpleBooleanExpressions: {
    valid: ['TRUE', 'FALSE'],
    invalid: ['ASDF', 'false'],
  },
}

describe('BooleanCalculator', () => {
  describe('knows to identify simple boolean expressions', () => {
    test.each(EXAMPLES.simpleBooleanExpressions.valid)(
      'knows that "%s" is a valid boolean expression',
      (input) => {
        const output = BooleanCalculator.evaluate(input)

        expect(output.error).toBeNull()
      }
    )
    test.each(EXAMPLES.simpleBooleanExpressions.invalid)(
      'knows that "%s" is not a valid boolean expression',
      (input) => {
        const output = BooleanCalculator.evaluate(input)

        expect(output.result).toEqual('error')
      }
    )
  })
})
