/**
 * An interface for user created handler logic to add to {@link ErrorMapper}.
 */
export interface ErrorHandler<Input, Output> {
    canHandle(handlerInput: Input, error: Error): Promise<boolean> | boolean;
    handle(handlerInput: Input, error: Error): Promise<Output> | Output;
}
