import { ErrorMapper } from '../dispatcher/error/mapper/ErrorMapper';
import { HandlerAdapter } from '../dispatcher/request/handler/HandlerAdapter';
import { RequestInterceptor } from '../dispatcher/request/interceptor/RequestInterceptor';
import { ResponseInterceptor } from '../dispatcher/request/interceptor/ResponseInterceptor';
import { RequestMapper } from '../dispatcher/request/mapper/RequestMapper';
export interface RuntimeConfiguration<Input, Output> {
    requestMappers: Array<RequestMapper<Input, Output>>;
    handlerAdapters: Array<HandlerAdapter<Input, Output>>;
    errorMapper?: ErrorMapper<Input, Output>;
    requestInterceptors?: Array<RequestInterceptor<Input>>;
    responseInterceptors?: Array<ResponseInterceptor<Input, Output>>;
}
