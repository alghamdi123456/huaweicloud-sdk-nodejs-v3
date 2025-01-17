import { IpGroup } from './IpGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWhiteblackipRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public policyid?: string;
    public addr?: string;
    public description?: string;
    public white?: number;
    private 'ip_group'?: IpGroup | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateWhiteblackipRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateWhiteblackipRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): UpdateWhiteblackipRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withAddr(addr: string): UpdateWhiteblackipRuleResponse {
        this['addr'] = addr;
        return this;
    }
    public withDescription(description: string): UpdateWhiteblackipRuleResponse {
        this['description'] = description;
        return this;
    }
    public withWhite(white: number): UpdateWhiteblackipRuleResponse {
        this['white'] = white;
        return this;
    }
    public withIpGroup(ipGroup: IpGroup): UpdateWhiteblackipRuleResponse {
        this['ip_group'] = ipGroup;
        return this;
    }
    public set ipGroup(ipGroup: IpGroup | undefined) {
        this['ip_group'] = ipGroup;
    }
    public get ipGroup() {
        return this['ip_group'];
    }
}