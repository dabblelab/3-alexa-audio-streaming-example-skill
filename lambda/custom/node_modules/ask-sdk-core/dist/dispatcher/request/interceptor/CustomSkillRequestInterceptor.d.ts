import { RequestInterceptor } from 'ask-sdk-runtime';
import { HandlerInput } from '../handler/HandlerInput';
export interface CustomSkillRequestInterceptor extends RequestInterceptor<HandlerInput> {
}
