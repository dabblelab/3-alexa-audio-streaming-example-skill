import { Response, services } from 'ask-sdk-model';
import { RuntimeConfiguration } from 'ask-sdk-runtime';
import { PersistenceAdapter } from '../attributes/persistence/PersistenceAdapter';
import { HandlerInput } from '../dispatcher/request/handler/HandlerInput';
/**
 * An interfaces that represents the standard components needed to build {@link CustomSkill}.
 */
export interface CustomSkillConfiguration extends RuntimeConfiguration<HandlerInput, Response> {
    persistenceAdapter?: PersistenceAdapter;
    apiClient?: services.ApiClient;
    customUserAgent?: string;
    skillId?: string;
}
