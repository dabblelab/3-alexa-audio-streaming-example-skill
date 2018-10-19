import { Response } from 'ask-sdk-model';
import { CustomSkillErrorHandler } from '../../dispatcher/error/handler/CustomSkillErrorHandler';
import { CustomSkillRequestHandler } from '../../dispatcher/request/handler/CustomSkillRequestHandler';
import { HandlerInput } from '../../dispatcher/request/handler/HandlerInput';
import { CustomSkillRequestInterceptor } from '../../dispatcher/request/interceptor/CustomSkillRequestInterceptor';
import { CustomSkillResponseInterceptor } from '../../dispatcher/request/interceptor/CustomSkillResponseInterceptor';
import { CustomSkill } from '../CustomSkill';
import { CustomSkillConfiguration } from '../CustomSkillConfiguration';
import { LambdaHandler } from './BaseSkillFactory';
/**
 * An interface containing help functions to build a {@link CustomSkill}.
 */
export interface BaseSkillBuilder {
    addRequestHandler(matcher: ((input: HandlerInput) => Promise<boolean> | boolean) | string, executor: (input: HandlerInput) => Promise<Response> | Response): this;
    addRequestHandlers(...requestHandlers: CustomSkillRequestHandler[]): this;
    addRequestInterceptors(...executors: Array<CustomSkillRequestInterceptor | ((input: HandlerInput) => Promise<void> | void)>): this;
    addResponseInterceptors(...executors: Array<CustomSkillResponseInterceptor | ((input: HandlerInput, response?: Response) => Promise<void> | void)>): this;
    addErrorHandler(matcher: (input: HandlerInput, error: Error) => Promise<boolean> | boolean, executor: (input: HandlerInput, error: Error) => Promise<Response> | Response): this;
    addErrorHandlers(...errorHandlers: CustomSkillErrorHandler[]): this;
    withCustomUserAgent(customUserAgent: string): this;
    withSkillId(skillId: string): this;
    getSkillConfiguration(): CustomSkillConfiguration;
    create(): CustomSkill;
    lambda(): LambdaHandler;
}
