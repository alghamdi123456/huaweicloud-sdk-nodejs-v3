import { UpdateServerBlockDeviceReq } from './UpdateServerBlockDeviceReq';


export class UpdateServerBlockDeviceRequest {
    private 'server_id': string | undefined;
    private 'volume_id': string | undefined;
    public body?: UpdateServerBlockDeviceReq;
    public constructor(serverId?: any, volumeId?: any) { 
        this['server_id'] = serverId;
        this['volume_id'] = volumeId;
    }
    public withServerId(serverId: string): UpdateServerBlockDeviceRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withVolumeId(volumeId: string): UpdateServerBlockDeviceRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
    public withBody(body: UpdateServerBlockDeviceReq): UpdateServerBlockDeviceRequest {
        this['body'] = body;
        return this;
    }
}