/**
 * An interface providing the logic for dispatching handler input to handler.
 */
export interface RequestDispatcher<Input, Output> {
    dispatch(input: Input): Promise<Output> | Output;
}
