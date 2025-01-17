import { ClientAffinity } from './ClientAffinity';
import { ConfigStatus } from './ConfigStatus';
import { FrozenInfo } from './FrozenInfo';
import { ListenerProtocol } from './ListenerProtocol';
import { PortRange } from './PortRange';
import { ResourceTag } from './ResourceTag';


export class ListenerDetail {
    public id?: string;
    public name?: string;
    public description?: string;
    public protocol?: ListenerProtocol;
    public status?: ConfigStatus;
    private 'port_ranges'?: Array<PortRange> | undefined;
    private 'client_affinity'?: ClientAffinity | undefined;
    private 'accelerator_id'?: string | undefined;
    private 'created_at'?: Date | undefined;
    private 'updated_at'?: Date | undefined;
    private 'domain_id'?: string | undefined;
    private 'frozen_info'?: FrozenInfo | undefined;
    public tags?: Array<ResourceTag>;
    public constructor() { 
    }
    public withId(id: string): ListenerDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListenerDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListenerDetail {
        this['description'] = description;
        return this;
    }
    public withProtocol(protocol: ListenerProtocol): ListenerDetail {
        this['protocol'] = protocol;
        return this;
    }
    public withStatus(status: ConfigStatus): ListenerDetail {
        this['status'] = status;
        return this;
    }
    public withPortRanges(portRanges: Array<PortRange>): ListenerDetail {
        this['port_ranges'] = portRanges;
        return this;
    }
    public set portRanges(portRanges: Array<PortRange> | undefined) {
        this['port_ranges'] = portRanges;
    }
    public get portRanges() {
        return this['port_ranges'];
    }
    public withClientAffinity(clientAffinity: ClientAffinity): ListenerDetail {
        this['client_affinity'] = clientAffinity;
        return this;
    }
    public set clientAffinity(clientAffinity: ClientAffinity | undefined) {
        this['client_affinity'] = clientAffinity;
    }
    public get clientAffinity() {
        return this['client_affinity'];
    }
    public withAcceleratorId(acceleratorId: string): ListenerDetail {
        this['accelerator_id'] = acceleratorId;
        return this;
    }
    public set acceleratorId(acceleratorId: string | undefined) {
        this['accelerator_id'] = acceleratorId;
    }
    public get acceleratorId() {
        return this['accelerator_id'];
    }
    public withCreatedAt(createdAt: Date): ListenerDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ListenerDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withDomainId(domainId: string): ListenerDetail {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withFrozenInfo(frozenInfo: FrozenInfo): ListenerDetail {
        this['frozen_info'] = frozenInfo;
        return this;
    }
    public set frozenInfo(frozenInfo: FrozenInfo | undefined) {
        this['frozen_info'] = frozenInfo;
    }
    public get frozenInfo() {
        return this['frozen_info'];
    }
    public withTags(tags: Array<ResourceTag>): ListenerDetail {
        this['tags'] = tags;
        return this;
    }
}