import { PageInfoOption } from './PageInfoOption';
import { PublicipSingleShowResp } from './PublicipSingleShowResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublicipsResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public publicips?: Array<PublicipSingleShowResp>;
    private 'page_info'?: PageInfoOption | undefined;
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListPublicipsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPublicips(publicips: Array<PublicipSingleShowResp>): ListPublicipsResponse {
        this['publicips'] = publicips;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoOption): ListPublicipsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoOption | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withTotalCount(totalCount: number): ListPublicipsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
}