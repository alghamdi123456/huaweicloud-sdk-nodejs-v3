import { Login } from './Login';
import { NodeLifecycleConfig } from './NodeLifecycleConfig';
import { ReinstallExtendParam } from './ReinstallExtendParam';
import { ReinstallK8sOptionsConfig } from './ReinstallK8sOptionsConfig';
import { ReinstallRuntimeConfig } from './ReinstallRuntimeConfig';
import { ReinstallServerConfig } from './ReinstallServerConfig';
import { ReinstallVolumeConfig } from './ReinstallVolumeConfig';


export class ReinstallNodeSpec {
    public os: string;
    public login: Login;
    public name?: string;
    public serverConfig?: ReinstallServerConfig;
    public volumeConfig?: ReinstallVolumeConfig;
    public runtimeConfig?: ReinstallRuntimeConfig;
    public k8sOptions?: ReinstallK8sOptionsConfig;
    public lifecycle?: NodeLifecycleConfig;
    public extendParam?: ReinstallExtendParam;
    public constructor(os?: any, login?: any) { 
        this['os'] = os;
        this['login'] = login;
    }
    public withOs(os: string): ReinstallNodeSpec {
        this['os'] = os;
        return this;
    }
    public withLogin(login: Login): ReinstallNodeSpec {
        this['login'] = login;
        return this;
    }
    public withName(name: string): ReinstallNodeSpec {
        this['name'] = name;
        return this;
    }
    public withServerConfig(serverConfig: ReinstallServerConfig): ReinstallNodeSpec {
        this['serverConfig'] = serverConfig;
        return this;
    }
    public withVolumeConfig(volumeConfig: ReinstallVolumeConfig): ReinstallNodeSpec {
        this['volumeConfig'] = volumeConfig;
        return this;
    }
    public withRuntimeConfig(runtimeConfig: ReinstallRuntimeConfig): ReinstallNodeSpec {
        this['runtimeConfig'] = runtimeConfig;
        return this;
    }
    public withK8sOptions(k8sOptions: ReinstallK8sOptionsConfig): ReinstallNodeSpec {
        this['k8sOptions'] = k8sOptions;
        return this;
    }
    public withLifecycle(lifecycle: NodeLifecycleConfig): ReinstallNodeSpec {
        this['lifecycle'] = lifecycle;
        return this;
    }
    public withExtendParam(extendParam: ReinstallExtendParam): ReinstallNodeSpec {
        this['extendParam'] = extendParam;
        return this;
    }
}