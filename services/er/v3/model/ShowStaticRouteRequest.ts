

export class ShowStaticRouteRequest {
    private 'route_table_id': string | undefined;
    private 'route_id': string | undefined;
    public constructor(routeTableId?: any, routeId?: any) { 
        this['route_table_id'] = routeTableId;
        this['route_id'] = routeId;
    }
    public withRouteTableId(routeTableId: string): ShowStaticRouteRequest {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId() {
        return this['route_table_id'];
    }
    public withRouteId(routeId: string): ShowStaticRouteRequest {
        this['route_id'] = routeId;
        return this;
    }
    public set routeId(routeId: string | undefined) {
        this['route_id'] = routeId;
    }
    public get routeId() {
        return this['route_id'];
    }
}