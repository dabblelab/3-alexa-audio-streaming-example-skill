import { ErrorHandler } from '../handler/ErrorHandler';
import { ErrorMapper } from './ErrorMapper';
/**
 * Generic implementation of @{link ErrorMapper}
 */
export declare class GenericErrorMapper<Input, Output> implements ErrorMapper<Input, Output> {
    protected errorHandlers: Array<ErrorHandler<Input, Output>>;
    constructor(options: {
        errorHandlers: Array<ErrorHandler<Input, Output>>;
    });
    getErrorHandler(handlerInput: Input, error: Error): Promise<ErrorHandler<Input, Output>>;
}
