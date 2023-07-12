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
  private static validateBoolean(str: string): boolean {
    return str === 'TRUE' || str === 'FALSE'
  }

  private static validateOperator(operator: string): boolean {
    const [booleanOrOperator, boolean] = operator.split(' ')

    return booleanOrOperator === 'NOT'
      ? this.validateBoolean(boolean)
      : this.validateBoolean(operator)
  }

  private static evaluateBoolean(str: string): boolean {
    return str.indexOf('NOT') === -1
      ? JSON.parse(str.toLowerCase())
      : !JSON.parse(str.replace('NOT', '').toLowerCase())
  }

  public static evaluate(expression: string): EvaluationResult {
    if (expression.includes(' AND ') || expression.includes(' OR ')) {
      const [operator1, operator2] = expression.includes(' AND ')
        ? expression.split(' AND ')
        : expression.split(' OR ')
      if (
        this.validateOperator(operator1) &&
        this.validateOperator(operator2)
      ) {
        const result = expression.includes(' OR ')
          ? this.evaluateBoolean(operator1) || this.evaluateBoolean(operator2)
          : this.evaluateBoolean(operator1) && this.evaluateBoolean(operator2)
        return {
          result,
          error: null,
        }
      }
    }

    if (this.validateOperator(expression)) {
      return {
        result: this.evaluateBoolean(expression),
        error: null,
      }
    }

    return {
      result: 'error',
      error: 'error',
    }
  }
}
