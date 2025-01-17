

export class SearchFaceByFileRequestBody {
    private 'image_file': any | undefined;
    private 'top_n'?: number | undefined;
    public threshold?: number;
    public sort?: string;
    public filter?: string;
    private 'return_fields'?: string | undefined;
    public constructor(imageFile?: any) { 
        this['image_file'] = imageFile;
    }
    public withImageFile(imageFile: any): SearchFaceByFileRequestBody {
        this['image_file'] = imageFile;
        return this;
    }
    public set imageFile(imageFile: any | undefined) {
        this['image_file'] = imageFile;
    }
    public get imageFile() {
        return this['image_file'];
    }
    public withTopN(topN: number): SearchFaceByFileRequestBody {
        this['top_n'] = topN;
        return this;
    }
    public set topN(topN: number | undefined) {
        this['top_n'] = topN;
    }
    public get topN() {
        return this['top_n'];
    }
    public withThreshold(threshold: number): SearchFaceByFileRequestBody {
        this['threshold'] = threshold;
        return this;
    }
    public withSort(sort: string): SearchFaceByFileRequestBody {
        this['sort'] = sort;
        return this;
    }
    public withFilter(filter: string): SearchFaceByFileRequestBody {
        this['filter'] = filter;
        return this;
    }
    public withReturnFields(returnFields: string): SearchFaceByFileRequestBody {
        this['return_fields'] = returnFields;
        return this;
    }
    public set returnFields(returnFields: string | undefined) {
        this['return_fields'] = returnFields;
    }
    public get returnFields() {
        return this['return_fields'];
    }
}