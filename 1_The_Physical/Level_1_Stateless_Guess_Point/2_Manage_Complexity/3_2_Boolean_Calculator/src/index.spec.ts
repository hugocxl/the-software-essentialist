import { BooleanCalculator } from './index'

const EXAMPLES = {
  simpleBooleanExpressions: {
    valid: ['TRUE'],
  },
}

describe('BooleanCalculator', () => {
  describe('knows to identify simple boolean expressions', () => {
    test.each(EXAMPLES.simpleBooleanExpressions.valid)(
      'knows that "%s" is a valid boolean expression',
      (expression) => {
        const output = BooleanCalculator.evaluate('TRUE')

        expect(output).toEqual({
          result: true,
          error: null,
        })
      }
    )
  })
})
