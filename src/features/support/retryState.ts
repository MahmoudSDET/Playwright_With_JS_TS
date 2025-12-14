export const retryState = (global as any).retryState || {
  failedScenarios: new Map<string, number>(),
};

(global as any).retryState = retryState;
