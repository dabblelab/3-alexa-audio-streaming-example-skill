import { Response } from 'ask-sdk-model';
import { ResponseInterceptor } from 'ask-sdk-runtime';
import { HandlerInput } from '../handler/HandlerInput';
export interface CustomSkillResponseInterceptor extends ResponseInterceptor<HandlerInput, Response> {
}
