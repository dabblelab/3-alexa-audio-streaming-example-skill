import { ErrorHandler } from '../dispatcher/error/handler/ErrorHandler';
import { GenericRequestHandlerChain } from '../dispatcher/request/handler/GenericRequestHandlerChain';
import { RequestHandler } from '../dispatcher/request/handler/RequestHandler';
import { RequestInterceptor } from '../dispatcher/request/interceptor/RequestInterceptor';
import { ResponseInterceptor } from '../dispatcher/request/interceptor/ResponseInterceptor';
import { RuntimeConfiguration } from './RuntimeConfiguration';
export declare class RuntimeConfigurationBuilder<Input, Output> {
    protected readonly requestHandlerChains: Array<GenericRequestHandlerChain<Input, Output>>;
    protected readonly requestInterceptors: Array<RequestInterceptor<Input>>;
    protected readonly responseInterceptors: Array<ResponseInterceptor<Input, Output>>;
    protected readonly errorHandlers: Array<ErrorHandler<Input, Output>>;
    addRequestHandler(matcher: (input: Input) => Promise<boolean> | boolean, executor: (input: Input) => Promise<Output> | Output): this;
    addRequestHandlers(...requestHandlers: Array<RequestHandler<Input, Output>>): this;
    addRequestInterceptors(...executors: Array<RequestInterceptor<Input> | ((input: Input) => Promise<void> | void)>): this;
    addResponseInterceptors(...executors: Array<ResponseInterceptor<Input, Output> | ((input: Input, response?: Output) => Promise<void> | void)>): this;
    addErrorHandler(matcher: (input: Input, error: Error) => Promise<boolean> | boolean, executor: (input: Input, error: Error) => Promise<Output> | Output): this;
    addErrorHandlers(...errorHandlers: Array<ErrorHandler<Input, Output>>): this;
    getRuntimeConfiguration(): RuntimeConfiguration<Input, Output>;
}
