/**
 * An interface containing the logic to execute before handler is called.
 */
export interface RequestInterceptor<Input> {
    process(input: Input): Promise<void> | void;
}
