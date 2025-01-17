import { UpdateWhitelistReq } from './UpdateWhitelistReq';


export class UpdateWhitelistRequestBody {
    public whitelist: UpdateWhitelistReq;
    public constructor(whitelist?: any) { 
        this['whitelist'] = whitelist;
    }
    public withWhitelist(whitelist: UpdateWhitelistReq): UpdateWhitelistRequestBody {
        this['whitelist'] = whitelist;
        return this;
    }
}