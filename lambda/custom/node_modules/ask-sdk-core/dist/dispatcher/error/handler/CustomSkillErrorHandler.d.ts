import { Response } from 'ask-sdk-model';
import { ErrorHandler } from 'ask-sdk-runtime';
import { HandlerInput } from '../../request/handler/HandlerInput';
export interface CustomSkillErrorHandler extends ErrorHandler<HandlerInput, Response> {
}
