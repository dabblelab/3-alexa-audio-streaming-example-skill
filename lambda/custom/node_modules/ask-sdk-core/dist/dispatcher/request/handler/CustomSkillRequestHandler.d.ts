import { Response } from 'ask-sdk-model';
import { RequestHandler } from 'ask-sdk-runtime';
import { HandlerInput } from './HandlerInput';
export interface CustomSkillRequestHandler extends RequestHandler<HandlerInput, Response> {
}
