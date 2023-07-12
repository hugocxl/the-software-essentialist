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
    if (expression.includes('TRUE')) {
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
