import { PersistenceAdapter } from 'ask-sdk-core';
import { RequestEnvelope } from 'ask-sdk-model';
import { DynamoDB } from 'aws-sdk';
import { PartitionKeyGenerator } from './PartitionKeyGenerators';
/**
 * Implementation of {@link PersistenceAdapter} using AWS DynamoDB.
 */
export declare class DynamoDbPersistenceAdapter implements PersistenceAdapter {
    protected tableName: string;
    protected partitionKeyName: string;
    protected attributesName: string;
    protected createTable: boolean;
    protected dynamoDBClient: DynamoDB;
    protected partitionKeyGenerator: PartitionKeyGenerator;
    protected dynamoDBDocumentClient: DynamoDB.DocumentClient;
    constructor(config: {
        tableName: string;
        partitionKeyName?: string;
        attributesName?: string;
        createTable?: boolean;
        dynamoDBClient?: DynamoDB;
        partitionKeyGenerator?: PartitionKeyGenerator;
    });
    /**
     * Retrieves persistence attributes from AWS DynamoDB.
     * @param {RequestEnvelope} requestEnvelope Request envelope used to generate partition key.
     * @returns {Promise<Object.<string, any>>}
     */
    getAttributes(requestEnvelope: RequestEnvelope): Promise<{
        [key: string]: any;
    }>;
    /**
     * Saves persistence attributes to AWS DynamoDB.
     * @param {RequestEnvelope} requestEnvelope Request envelope used to generate partition key.
     * @param {Object.<string, any>} attributes Attributes to be saved to DynamoDB.
     * @return {Promise<void>}
     */
    saveAttributes(requestEnvelope: RequestEnvelope, attributes: {
        [key: string]: any;
    }): Promise<void>;
}
