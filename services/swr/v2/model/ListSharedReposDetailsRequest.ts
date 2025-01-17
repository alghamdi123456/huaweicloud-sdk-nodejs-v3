

export class ListSharedReposDetailsRequest {
    private 'Content-Type': ListSharedReposDetailsRequestContentTypeEnum | undefined;
    public namespace?: string;
    public name?: string;
    public center?: string;
    public limit?: string;
    public offset?: string;
    private 'order_column'?: string | undefined;
    private 'order_type'?: string | undefined;
    public filter?: string;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ListSharedReposDetailsRequestContentTypeEnum): ListSharedReposDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListSharedReposDetailsRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListSharedReposDetailsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withName(name: string): ListSharedReposDetailsRequest {
        this['name'] = name;
        return this;
    }
    public withCenter(center: string): ListSharedReposDetailsRequest {
        this['center'] = center;
        return this;
    }
    public withLimit(limit: string): ListSharedReposDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListSharedReposDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderColumn(orderColumn: string): ListSharedReposDetailsRequest {
        this['order_column'] = orderColumn;
        return this;
    }
    public set orderColumn(orderColumn: string | undefined) {
        this['order_column'] = orderColumn;
    }
    public get orderColumn() {
        return this['order_column'];
    }
    public withOrderType(orderType: string): ListSharedReposDetailsRequest {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: string | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType() {
        return this['order_type'];
    }
    public withFilter(filter: string): ListSharedReposDetailsRequest {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSharedReposDetailsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
