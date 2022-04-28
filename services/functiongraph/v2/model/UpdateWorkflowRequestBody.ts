import { ExpressConfig } from './ExpressConfig';
import { Function } from './Function';
import { OperationState } from './OperationState';
import { Retry } from './Retry';
import { Trigger } from './Trigger';


export class UpdateWorkflowRequestBody {
    public name?: string;
    public description?: string;
    public triggers?: Array<Trigger>;
    public start?: string;
    public functions?: Array<Function>;
    public states?: Array<OperationState>;
    public constants?: object;
    public retries?: Array<Retry>;
    public mode?: UpdateWorkflowRequestBodyModeEnum;
    private 'express_config'?: ExpressConfig | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withName(name: string): UpdateWorkflowRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateWorkflowRequestBody {
        this['description'] = description;
        return this;
    }
    public withTriggers(triggers: Array<Trigger>): UpdateWorkflowRequestBody {
        this['triggers'] = triggers;
        return this;
    }
    public withStart(start: string): UpdateWorkflowRequestBody {
        this['start'] = start;
        return this;
    }
    public withFunctions(functions: Array<Function>): UpdateWorkflowRequestBody {
        this['functions'] = functions;
        return this;
    }
    public withStates(states: Array<OperationState>): UpdateWorkflowRequestBody {
        this['states'] = states;
        return this;
    }
    public withConstants(constants: object): UpdateWorkflowRequestBody {
        this['constants'] = constants;
        return this;
    }
    public withRetries(retries: Array<Retry>): UpdateWorkflowRequestBody {
        this['retries'] = retries;
        return this;
    }
    public withMode(mode: UpdateWorkflowRequestBodyModeEnum): UpdateWorkflowRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withExpressConfig(expressConfig: ExpressConfig): UpdateWorkflowRequestBody {
        this['express_config'] = expressConfig;
        return this;
    }
    public set expressConfig(expressConfig: ExpressConfig | undefined) {
        this['express_config'] = expressConfig;
    }
    public get expressConfig() {
        return this['express_config'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateWorkflowRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateWorkflowRequestBodyModeEnum {
    NORMAL = 'NORMAL',
    EXPRESS = 'EXPRESS'
}
