# Boolean Calculator

## Requirements

Create a boolean calculator that takes a boolean expression (as a string) and evaluates it to compute the correct output boolean result

## Responsabilities

- It should be able to identify simple boolean expression
- It should be able to evaluate simple boolean expressions
- It should be able to identify complex boolean expressions
- It should be able to evaluate complex boolean expressions

## Examples

### It should be able to identify simple boolean expression

- "TRUE" -> true
- "FALSE" -> true
- "false" -> false
- "ASDF" -> false
- "NSD TRUE" -> false
- "TRUE2" -> false
- "TRUE SASD" -> false
- "NOT FALSE" -> true
- "NOT TRUE" -> true

### It should be able to evaluate correct simple boolean expression

- "TRUE" -> true
- "FALSE" -> false
- "NOT FALSE" -> true
- "NOT TRUE" -> false

### It should be able to identify complex boolean expression

- "TRUE AND TRUE" -> true
- "TRUE AND OTHER" -> false
- "NOT TRUE AND TRUE" -> true
- "TRUE N FALSE" -> false
- "FALSE AND" -> false
- "TRUE OR FALSE" -> true
- "(TRUE AND TRUE) OR FALSE" -> true
- "(TRUE AND TRUE OR FALSE" -> false
- "TRUE AND TRUE)" -> false
- "(TRUE AND TRUE) OR) FALSE" -> false
- "NOT (TRUE AND TRUE) AND FALSE" -> true
- "(TRUE OR TRUE OR TRUE) AND FALSE" -> true
- "NOT (TRUE AND TRUE)" -> true
- "NOT TRUE" -> true

### It should be able to evaluate complex boolean expression

- "TRUE OR TRUE OR TRUE AND FALSE" -> true
- "TRUE OR FALSE AND NOT FALSE" -> true
- "(TRUE OR TRUE OR TRUE) AND FALSE" -> false
- "NOT (TRUE AND TRUE)" -> false

### API Upfront design

```ts
type EvaluationSuccessResult = {
  result: boolean;
  error: null;
};
type EvaluationErrorResult = {
  result:  'error;
  error: string
};

type EvaluationResult = EvaluationSuccessResult | EvaluationErrorResult;

interface BooleanCalculator {
  evaluate(expression: ): EvaluationResult;
}
```
