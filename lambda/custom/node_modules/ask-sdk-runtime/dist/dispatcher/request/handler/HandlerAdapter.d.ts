/**
 * An interface that abstracts the handling of a request for specific types of handlers.
 */
export interface HandlerAdapter<Input, Output> {
    supports(handler: any): boolean;
    execute(input: Input, handler: any): Promise<Output> | Output;
}
