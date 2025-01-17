

export class ListApplicationsV6Request {
    private 'X-Language'?: ListApplicationsV6RequestXLanguageEnum | undefined;
    public attention?: boolean;
    private 'region_id'?: string | undefined;
    public keyword?: string;
    private 'project_id'?: string | undefined;
    private 'topic_id'?: string | undefined;
    private 'is_created_by_self'?: boolean | undefined;
    private 'sort_key'?: Array<ListApplicationsV6RequestSortKeyEnum> | undefined;
    private 'sort_dir'?: Array<ListApplicationsV6RequestSortDirEnum> | undefined;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListApplicationsV6RequestXLanguageEnum): ListApplicationsV6Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListApplicationsV6RequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withAttention(attention: boolean): ListApplicationsV6Request {
        this['attention'] = attention;
        return this;
    }
    public withRegionId(regionId: string): ListApplicationsV6Request {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withKeyword(keyword: string): ListApplicationsV6Request {
        this['keyword'] = keyword;
        return this;
    }
    public withProjectId(projectId: string): ListApplicationsV6Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withTopicId(topicId: string): ListApplicationsV6Request {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId() {
        return this['topic_id'];
    }
    public withIsCreatedBySelf(isCreatedBySelf: boolean): ListApplicationsV6Request {
        this['is_created_by_self'] = isCreatedBySelf;
        return this;
    }
    public set isCreatedBySelf(isCreatedBySelf: boolean | undefined) {
        this['is_created_by_self'] = isCreatedBySelf;
    }
    public get isCreatedBySelf() {
        return this['is_created_by_self'];
    }
    public withSortKey(sortKey: Array<ListApplicationsV6RequestSortKeyEnum>): ListApplicationsV6Request {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListApplicationsV6RequestSortKeyEnum> | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListApplicationsV6RequestSortDirEnum>): ListApplicationsV6Request {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListApplicationsV6RequestSortDirEnum> | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
    public withLimit(limit: number): ListApplicationsV6Request {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListApplicationsV6Request {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApplicationsV6RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApplicationsV6RequestSortKeyEnum {
    NAME = 'name',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApplicationsV6RequestSortDirEnum {
    DESC = 'desc',
    ASC = 'asc'
}
