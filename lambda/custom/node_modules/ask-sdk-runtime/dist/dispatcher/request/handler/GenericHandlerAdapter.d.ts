import { HandlerAdapter } from './HandlerAdapter';
/**
 * Generic implementation of {@link HandlerAdapter that supports the {@link RequestHandler}}}
 */
export declare class GenericHandlerAdapter<Input, Output> implements HandlerAdapter<Input, Output> {
    supports(handler: any): boolean;
    execute(input: Input, handler: any): Promise<Output>;
}
