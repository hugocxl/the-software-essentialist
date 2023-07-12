import { BooleanCalculator } from './index'

const EXAMPLES = {
  simpleBooleanExpressions: {
    valid: ['TRUE', 'FALSE', 'NOT FALSE', 'NOT TRUE'],
    invalid: ['ASDF', 'false', 'NSD TRUE', 'TRUE2', 'TRUE NOT'],
  },
  simpleBooleanEvaluations: {
    false: ['FALSE', 'NOT TRUE'],
    true: ['TRUE', 'NOT FALSE'],
  },
  complexBooleanExpressions: {
    valid: ['TRUE AND TRUE', 'TRUE AND NOT FALSE'],
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
  describe('knows to evaluate simple boolean expressions', () => {
    test.each(EXAMPLES.simpleBooleanEvaluations.false)(
      'knows that "%s" is a falsy boolean',
      (input) => {
        const output = BooleanCalculator.evaluate(input)

        expect(output.result).toBe(false)
      }
    )
    test.each(EXAMPLES.simpleBooleanEvaluations.true)(
      'knows that "%s" is a truthy boolean',
      (input) => {
        const output = BooleanCalculator.evaluate(input)

        expect(output.result).toBe(true)
      }
    )
  })
  describe('knows to identify complex boolean expressions', () => {
    test.each(EXAMPLES.complexBooleanExpressions.valid)(
      'knows that "%s" is a valid boolean expression',
      (input) => {
        const output = BooleanCalculator.evaluate(input)

        expect(output.error).toBeNull()
      }
    )
  })
})
