import { InsertHeader } from './InsertHeader';


export class CreateListenerReq {
    private 'loadbalancer_id': string | undefined;
    public protocol: CreateListenerReqProtocolEnum;
    private 'protocol_port': number | undefined;
    private 'tenant_id'?: string | undefined;
    public name?: string;
    public description?: string;
    private 'admin_state_up'?: boolean | undefined;
    private 'connection_limit'?: number | undefined;
    private 'http2_enable'?: boolean | undefined;
    private 'default_pool_id'?: string | undefined;
    private 'default_tls_container_ref'?: string | undefined;
    private 'client_ca_tls_container_ref'?: string | undefined;
    private 'sni_container_refs'?: Array<string> | undefined;
    private 'insert_headers'?: InsertHeader | undefined;
    private 'tls_ciphers_policy'?: CreateListenerReqTlsCiphersPolicyEnum | undefined;
    public constructor(loadbalancerId?: any, protocol?: any, protocolPort?: any) { 
        this['loadbalancer_id'] = loadbalancerId;
        this['protocol'] = protocol;
        this['protocol_port'] = protocolPort;
    }
    public withLoadbalancerId(loadbalancerId: string): CreateListenerReq {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withProtocol(protocol: CreateListenerReqProtocolEnum): CreateListenerReq {
        this['protocol'] = protocol;
        return this;
    }
    public withProtocolPort(protocolPort: number): CreateListenerReq {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort() {
        return this['protocol_port'];
    }
    public withTenantId(tenantId: string): CreateListenerReq {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withName(name: string): CreateListenerReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateListenerReq {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateListenerReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withConnectionLimit(connectionLimit: number): CreateListenerReq {
        this['connection_limit'] = connectionLimit;
        return this;
    }
    public set connectionLimit(connectionLimit: number | undefined) {
        this['connection_limit'] = connectionLimit;
    }
    public get connectionLimit() {
        return this['connection_limit'];
    }
    public withHttp2Enable(http2Enable: boolean): CreateListenerReq {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable() {
        return this['http2_enable'];
    }
    public withDefaultPoolId(defaultPoolId: string): CreateListenerReq {
        this['default_pool_id'] = defaultPoolId;
        return this;
    }
    public set defaultPoolId(defaultPoolId: string | undefined) {
        this['default_pool_id'] = defaultPoolId;
    }
    public get defaultPoolId() {
        return this['default_pool_id'];
    }
    public withDefaultTlsContainerRef(defaultTlsContainerRef: string): CreateListenerReq {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        return this;
    }
    public set defaultTlsContainerRef(defaultTlsContainerRef: string | undefined) {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public get defaultTlsContainerRef() {
        return this['default_tls_container_ref'];
    }
    public withClientCaTlsContainerRef(clientCaTlsContainerRef: string): CreateListenerReq {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        return this;
    }
    public set clientCaTlsContainerRef(clientCaTlsContainerRef: string | undefined) {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
    }
    public get clientCaTlsContainerRef() {
        return this['client_ca_tls_container_ref'];
    }
    public withSniContainerRefs(sniContainerRefs: Array<string>): CreateListenerReq {
        this['sni_container_refs'] = sniContainerRefs;
        return this;
    }
    public set sniContainerRefs(sniContainerRefs: Array<string> | undefined) {
        this['sni_container_refs'] = sniContainerRefs;
    }
    public get sniContainerRefs() {
        return this['sni_container_refs'];
    }
    public withInsertHeaders(insertHeaders: InsertHeader): CreateListenerReq {
        this['insert_headers'] = insertHeaders;
        return this;
    }
    public set insertHeaders(insertHeaders: InsertHeader | undefined) {
        this['insert_headers'] = insertHeaders;
    }
    public get insertHeaders() {
        return this['insert_headers'];
    }
    public withTlsCiphersPolicy(tlsCiphersPolicy: CreateListenerReqTlsCiphersPolicyEnum): CreateListenerReq {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
        return this;
    }
    public set tlsCiphersPolicy(tlsCiphersPolicy: CreateListenerReqTlsCiphersPolicyEnum | undefined) {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
    }
    public get tlsCiphersPolicy() {
        return this['tls_ciphers_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateListenerReqProtocolEnum {
    UDP = 'UDP',
    TCP = 'TCP',
    HTTP = 'HTTP',
    TERMINATED_HTTPS = 'TERMINATED_HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateListenerReqTlsCiphersPolicyEnum {
    TLS_1_0 = 'tls-1-0',
    TLS_1_1 = 'tls-1-1',
    TLS_1_2 = 'tls-1-2',
    TLS_1_2_STRICT = 'tls-1-2-strict'
}
