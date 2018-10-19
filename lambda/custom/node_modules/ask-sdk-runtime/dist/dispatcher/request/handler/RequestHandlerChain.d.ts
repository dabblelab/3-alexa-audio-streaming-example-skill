import { RequestInterceptor } from '../interceptor/RequestInterceptor';
import { ResponseInterceptor } from '../interceptor/ResponseInterceptor';
/**
 * An interface containing the request handler and corresponding request/response interceptors.
 */
export interface RequestHandlerChain<Input, Output> {
    getRequestHandler(): any;
    getRequestInterceptors(): Array<RequestInterceptor<Input>>;
    getResponseInterceptors(): Array<ResponseInterceptor<Input, Output>>;
}
