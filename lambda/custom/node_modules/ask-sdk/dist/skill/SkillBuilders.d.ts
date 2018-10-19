import { CustomSkillBuilder } from 'ask-sdk-core';
import { StandardSkillBuilder } from './factory/StandardSkillBuilder';
/**
 * Provider for skill builder.
 */
export declare const SkillBuilders: {
    standard(): StandardSkillBuilder;
    custom(): CustomSkillBuilder;
};
