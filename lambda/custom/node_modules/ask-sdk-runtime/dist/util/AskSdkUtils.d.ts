/**
 * function creating an AskSdk error.
 * @param {string} errorScope
 * @param {string} errorMessage
 * @returns {Error}
 */
export declare function createAskSdkError(errorScope: string, errorMessage: string): Error;
/**
 * function creating an AskSdk user agent.
 * @param packageVersion
 * @param customUserAgent
 */
export declare function createAskSdkUserAgent(packageVersion: string, customUserAgent: string): string;
