import { PropagationRequestBody } from './PropagationRequestBody';


export class DisablePropagationRequest {
    private 'er_id': string | undefined;
    private 'route_table_id': string | undefined;
    public body?: PropagationRequestBody;
    public constructor(erId?: any, routeTableId?: any) { 
        this['er_id'] = erId;
        this['route_table_id'] = routeTableId;
    }
    public withErId(erId: string): DisablePropagationRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string | undefined) {
        this['er_id'] = erId;
    }
    public get erId() {
        return this['er_id'];
    }
    public withRouteTableId(routeTableId: string): DisablePropagationRequest {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId() {
        return this['route_table_id'];
    }
    public withBody(body: PropagationRequestBody): DisablePropagationRequest {
        this['body'] = body;
        return this;
    }
}