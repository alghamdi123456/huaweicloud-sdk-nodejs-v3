import { ListenersInStatusResp } from './ListenersInStatusResp';
import { PoolsInStatusResp } from './PoolsInStatusResp';


export class LoadbalancerInStatusResp {
    public name: string;
    public id: string;
    public listeners: Array<ListenersInStatusResp>;
    public pools: Array<PoolsInStatusResp>;
    private 'operating_status': LoadbalancerInStatusRespOperatingStatusEnum | undefined;
    private 'provisioning_status': LoadbalancerInStatusRespProvisioningStatusEnum | undefined;
    public constructor(name?: any, id?: any, listeners?: any, pools?: any, operatingStatus?: any, provisioningStatus?: any) { 
        this['name'] = name;
        this['id'] = id;
        this['listeners'] = listeners;
        this['pools'] = pools;
        this['operating_status'] = operatingStatus;
        this['provisioning_status'] = provisioningStatus;
    }
    public withName(name: string): LoadbalancerInStatusResp {
        this['name'] = name;
        return this;
    }
    public withId(id: string): LoadbalancerInStatusResp {
        this['id'] = id;
        return this;
    }
    public withListeners(listeners: Array<ListenersInStatusResp>): LoadbalancerInStatusResp {
        this['listeners'] = listeners;
        return this;
    }
    public withPools(pools: Array<PoolsInStatusResp>): LoadbalancerInStatusResp {
        this['pools'] = pools;
        return this;
    }
    public withOperatingStatus(operatingStatus: LoadbalancerInStatusRespOperatingStatusEnum): LoadbalancerInStatusResp {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: LoadbalancerInStatusRespOperatingStatusEnum | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus() {
        return this['operating_status'];
    }
    public withProvisioningStatus(provisioningStatus: LoadbalancerInStatusRespProvisioningStatusEnum): LoadbalancerInStatusResp {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: LoadbalancerInStatusRespProvisioningStatusEnum | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LoadbalancerInStatusRespOperatingStatusEnum {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
    DEGRADED = 'DEGRADED',
    DISABLED = 'DISABLED',
    NO_MONITOR = 'NO_MONITOR'
}
/**
    * @export
    * @enum {string}
    */
export enum LoadbalancerInStatusRespProvisioningStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING_CREATE = 'PENDING_CREATE',
    ERROR = 'ERROR'
}
