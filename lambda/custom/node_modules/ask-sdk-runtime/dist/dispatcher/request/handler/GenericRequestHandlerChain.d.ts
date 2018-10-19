import { RequestInterceptor } from '../interceptor/RequestInterceptor';
import { ResponseInterceptor } from '../interceptor/ResponseInterceptor';
import { RequestHandler } from './RequestHandler';
import { RequestHandlerChain } from './RequestHandlerChain';
/**
 * Generic implementation of {@link RequestHandlerChain}.
 */
export declare class GenericRequestHandlerChain<Input, Output> implements RequestHandlerChain<Input, Output> {
    protected requestHandler: RequestHandler<Input, Output>;
    protected requestInterceptors: Array<RequestInterceptor<Input>>;
    protected responseInterceptors: Array<ResponseInterceptor<Input, Output>>;
    constructor(options: {
        requestHandler: RequestHandler<Input, Output>;
        requestInterceptors?: Array<RequestInterceptor<Input>>;
        responseInterceptors?: Array<ResponseInterceptor<Input, Output>>;
    });
    getRequestHandler(): RequestHandler<Input, Output>;
    getRequestInterceptors(): Array<RequestInterceptor<Input>>;
    getResponseInterceptors(): Array<ResponseInterceptor<Input, Output>>;
}
