export class APIError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function handleAPIError(error: APIError) {
  if (error instanceof APIError) {
    console.error(
      'API Error:',
      error.message,
      'Status Code:',
      error.statusCode
    );
  } else {
    console.error('An unexpected error occurred:', error);
  }
}

// Now repeat the same for a new custom error class
// 1. Create a new ValidationError class
// 2. Create a new function that handles Validation errors
// 3. Use it to throw errors in your discountCalculator and calculateTax utils functions

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export function handleValidationError(error: ValidationError) {
  if (error instanceof ValidationError) {
    console.error('Validation Error:', error.message);
  } else {
    console.error('An unexpected error occurred:', error);
  }
}
