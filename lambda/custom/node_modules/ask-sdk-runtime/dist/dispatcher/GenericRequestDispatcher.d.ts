import { RuntimeConfiguration } from '../skill/RuntimeConfiguration';
import { ErrorMapper } from './error/mapper/ErrorMapper';
import { HandlerAdapter } from './request/handler/HandlerAdapter';
import { RequestInterceptor } from './request/interceptor/RequestInterceptor';
import { ResponseInterceptor } from './request/interceptor/ResponseInterceptor';
import { RequestMapper } from './request/mapper/RequestMapper';
import { RequestDispatcher } from './RequestDispatcher';
/**
 * Generic implementation of {@link RequestDispatcher}.
 * @param Input generic type for input object sent to handler.
 * @param Output generic type for the handler return value.
 */
export declare class GenericRequestDispatcher<Input, Output> implements RequestDispatcher<Input, Output> {
    protected requestMappers: Array<RequestMapper<Input, Output>>;
    protected errorMapper: ErrorMapper<Input, Output>;
    protected handlerAdapters: Array<HandlerAdapter<Input, Output>>;
    protected requestInterceptors: Array<RequestInterceptor<Input>>;
    protected responseInterceptors: Array<ResponseInterceptor<Input, Output>>;
    constructor(options: RuntimeConfiguration<Input, Output>);
    /**
     * Main entry point for dispatching logic.
     * Dispatches handlerInput to requestHandlers and error, if any, to errorHandlers
     * @param input
     */
    dispatch(input: Input): Promise<Output>;
    /**
     * Main logic for request dispatching.
     * @param input
     */
    protected dispatchRequest(input: Input): Promise<Output>;
    /**
     * Main logic for error dispatching.
     * @param input
     * @param error
     */
    protected dispatchError(input: Input, error: Error): Promise<Output>;
}
