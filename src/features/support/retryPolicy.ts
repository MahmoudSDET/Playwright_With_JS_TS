export function shouldRetry(error: Error, scenarioName: string): boolean {
  const retryableErrors = [
    "Timeout",
    "Target page, context or browser has been closed",
    "Navigation failed"
  ];

  return retryableErrors.some(msg =>
    error.message.includes(msg)
  );
}
