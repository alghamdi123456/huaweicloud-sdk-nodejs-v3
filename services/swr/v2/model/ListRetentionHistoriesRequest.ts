

export class ListRetentionHistoriesRequest {
    private 'Content-Type': ListRetentionHistoriesRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public offset?: string;
    public limit?: string;
    public constructor(contentType?: any, namespace?: any, repository?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: ListRetentionHistoriesRequestContentTypeEnum): ListRetentionHistoriesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListRetentionHistoriesRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListRetentionHistoriesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ListRetentionHistoriesRequest {
        this['repository'] = repository;
        return this;
    }
    public withOffset(offset: string): ListRetentionHistoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListRetentionHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRetentionHistoriesRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
