/**
 * An interface for user-created handler logic to add to {@link CustomSkillRequestMapper}.
 */
export interface RequestHandler<Input, Output> {
    canHandle(input: Input): Promise<boolean> | boolean;
    handle(input: Input): Promise<Output> | Output;
}
