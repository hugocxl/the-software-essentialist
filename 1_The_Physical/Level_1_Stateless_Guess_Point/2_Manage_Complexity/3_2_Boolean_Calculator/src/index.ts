type EvaluationSuccessResult = {
  result: boolean
  error: null
}

type EvaluationErrorResult = {
  result: 'error'
  error: string
}

type EvaluationResult = EvaluationSuccessResult | EvaluationErrorResult

export class BooleanCalculator {
  public static evaluate(expression: string): EvaluationResult {
    const [booleanOrOperator, boolean] = expression.split(' ')

    if (
      booleanOrOperator === 'NOT' &&
      (boolean === 'TRUE' || boolean === 'FALSE')
    ) {
      return {
        result: true,
        error: null,
      }
    }

    if (expression === 'TRUE' || expression === 'FALSE') {
      return {
        result: true,
        error: null,
      }
    }

    return {
      result: 'error',
      error: 'error',
    }
  }
}
