import { RequestHandlerChain } from '../handler/RequestHandlerChain';
/**
 * An interface providing a mapping of handler input to {@link RequestHandlerChain}.
 */
export interface RequestMapper<Input, Output> {
    getRequestHandlerChain(input: Input): Promise<RequestHandlerChain<Input, Output>> | RequestHandlerChain<Input, Output>;
}
