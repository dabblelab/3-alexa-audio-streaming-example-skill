import { GenericRequestHandlerChain } from '../handler/GenericRequestHandlerChain';
import { RequestMapper } from './RequestMapper';
/**
 * Generic implementation for {@link RequestMapper}.
 */
export declare class GenericRequestMapper<Input, Output> implements RequestMapper<Input, Output> {
    protected requestHandlerChains: Array<GenericRequestHandlerChain<Input, Output>>;
    constructor(options: {
        requestHandlerChains: Array<GenericRequestHandlerChain<Input, Output>>;
    });
    getRequestHandlerChain(input: Input): Promise<GenericRequestHandlerChain<Input, Output>>;
}
