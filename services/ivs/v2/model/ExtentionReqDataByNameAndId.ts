

export class ExtentionReqDataByNameAndId {
    private 'verification_name': string | undefined;
    private 'verification_id': string | undefined;
    public constructor(verificationName?: any, verificationId?: any) { 
        this['verification_name'] = verificationName;
        this['verification_id'] = verificationId;
    }
    public withVerificationName(verificationName: string): ExtentionReqDataByNameAndId {
        this['verification_name'] = verificationName;
        return this;
    }
    public set verificationName(verificationName: string | undefined) {
        this['verification_name'] = verificationName;
    }
    public get verificationName() {
        return this['verification_name'];
    }
    public withVerificationId(verificationId: string): ExtentionReqDataByNameAndId {
        this['verification_id'] = verificationId;
        return this;
    }
    public set verificationId(verificationId: string | undefined) {
        this['verification_id'] = verificationId;
    }
    public get verificationId() {
        return this['verification_id'];
    }
}