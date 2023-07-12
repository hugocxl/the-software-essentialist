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
    return {
      result: true,
      error: null,
    }
  }
}
