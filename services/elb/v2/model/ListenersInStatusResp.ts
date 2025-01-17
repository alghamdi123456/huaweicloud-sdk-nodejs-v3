import { L7policiesInStatusResp } from './L7policiesInStatusResp';
import { PoolsInStatusResp } from './PoolsInStatusResp';


export class ListenersInStatusResp {
    public id: string;
    public name: string;
    public pools: Array<PoolsInStatusResp>;
    public l7policies: Array<L7policiesInStatusResp>;
    private 'operating_status': string | undefined;
    private 'provisioning_status': string | undefined;
    public constructor(id?: any, name?: any, pools?: any, l7policies?: any, operatingStatus?: any, provisioningStatus?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['pools'] = pools;
        this['l7policies'] = l7policies;
        this['operating_status'] = operatingStatus;
        this['provisioning_status'] = provisioningStatus;
    }
    public withId(id: string): ListenersInStatusResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListenersInStatusResp {
        this['name'] = name;
        return this;
    }
    public withPools(pools: Array<PoolsInStatusResp>): ListenersInStatusResp {
        this['pools'] = pools;
        return this;
    }
    public withL7policies(l7policies: Array<L7policiesInStatusResp>): ListenersInStatusResp {
        this['l7policies'] = l7policies;
        return this;
    }
    public withOperatingStatus(operatingStatus: string): ListenersInStatusResp {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus() {
        return this['operating_status'];
    }
    public withProvisioningStatus(provisioningStatus: string): ListenersInStatusResp {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
}