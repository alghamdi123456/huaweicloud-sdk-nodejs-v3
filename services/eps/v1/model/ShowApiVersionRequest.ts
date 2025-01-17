

export class ShowApiVersionRequest {
    private 'api_version': string | undefined;
    public constructor(apiVersion?: any) { 
        this['api_version'] = apiVersion;
    }
    public withApiVersion(apiVersion: string): ShowApiVersionRequest {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion() {
        return this['api_version'];
    }
}