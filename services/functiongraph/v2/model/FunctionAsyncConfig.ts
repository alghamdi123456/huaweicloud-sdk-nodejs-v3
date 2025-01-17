import { FuncAsyncDestinationConfig } from './FuncAsyncDestinationConfig';


export class FunctionAsyncConfig {
    private 'max_async_event_age_in_seconds': number | undefined;
    private 'max_async_retry_attempts': number | undefined;
    private 'destination_config': FuncAsyncDestinationConfig | undefined;
    private 'created_time'?: string | undefined;
    private 'last_modified'?: string | undefined;
    public constructor(maxAsyncEventAgeInSeconds?: any, maxAsyncRetryAttempts?: any, destinationConfig?: any) { 
        this['max_async_event_age_in_seconds'] = maxAsyncEventAgeInSeconds;
        this['max_async_retry_attempts'] = maxAsyncRetryAttempts;
        this['destination_config'] = destinationConfig;
    }
    public withMaxAsyncEventAgeInSeconds(maxAsyncEventAgeInSeconds: number): FunctionAsyncConfig {
        this['max_async_event_age_in_seconds'] = maxAsyncEventAgeInSeconds;
        return this;
    }
    public set maxAsyncEventAgeInSeconds(maxAsyncEventAgeInSeconds: number | undefined) {
        this['max_async_event_age_in_seconds'] = maxAsyncEventAgeInSeconds;
    }
    public get maxAsyncEventAgeInSeconds() {
        return this['max_async_event_age_in_seconds'];
    }
    public withMaxAsyncRetryAttempts(maxAsyncRetryAttempts: number): FunctionAsyncConfig {
        this['max_async_retry_attempts'] = maxAsyncRetryAttempts;
        return this;
    }
    public set maxAsyncRetryAttempts(maxAsyncRetryAttempts: number | undefined) {
        this['max_async_retry_attempts'] = maxAsyncRetryAttempts;
    }
    public get maxAsyncRetryAttempts() {
        return this['max_async_retry_attempts'];
    }
    public withDestinationConfig(destinationConfig: FuncAsyncDestinationConfig): FunctionAsyncConfig {
        this['destination_config'] = destinationConfig;
        return this;
    }
    public set destinationConfig(destinationConfig: FuncAsyncDestinationConfig | undefined) {
        this['destination_config'] = destinationConfig;
    }
    public get destinationConfig() {
        return this['destination_config'];
    }
    public withCreatedTime(createdTime: string): FunctionAsyncConfig {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
    public withLastModified(lastModified: string): FunctionAsyncConfig {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: string | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified() {
        return this['last_modified'];
    }
}