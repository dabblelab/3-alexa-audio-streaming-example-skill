/**
 * An interface containing the logic to execute after handler returns.
 */
export interface ResponseInterceptor<Input, Output> {
    process(input: Input, output?: Output): Promise<void> | void;
}
