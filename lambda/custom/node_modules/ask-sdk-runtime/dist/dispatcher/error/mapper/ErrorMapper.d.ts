import { ErrorHandler } from '../handler/ErrorHandler';
/**
 * An interface providing a mapping of handler input and error to {@link ErrorHandler}.
 */
export interface ErrorMapper<Input, Output> {
    getErrorHandler(input: Input, error: Error): Promise<ErrorHandler<Input, Output>> | ErrorHandler<Input, Output>;
}
