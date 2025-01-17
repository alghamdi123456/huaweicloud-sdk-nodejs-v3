

export class HandwritingRequestBody {
    public image?: string;
    public url?: string;
    private 'quick_mode'?: boolean | undefined;
    private 'char_set'?: string | undefined;
    private 'detect_direction'?: boolean | undefined;
    public constructor() { 
    }
    public withImage(image: string): HandwritingRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): HandwritingRequestBody {
        this['url'] = url;
        return this;
    }
    public withQuickMode(quickMode: boolean): HandwritingRequestBody {
        this['quick_mode'] = quickMode;
        return this;
    }
    public set quickMode(quickMode: boolean | undefined) {
        this['quick_mode'] = quickMode;
    }
    public get quickMode() {
        return this['quick_mode'];
    }
    public withCharSet(charSet: string): HandwritingRequestBody {
        this['char_set'] = charSet;
        return this;
    }
    public set charSet(charSet: string | undefined) {
        this['char_set'] = charSet;
    }
    public get charSet() {
        return this['char_set'];
    }
    public withDetectDirection(detectDirection: boolean): HandwritingRequestBody {
        this['detect_direction'] = detectDirection;
        return this;
    }
    public set detectDirection(detectDirection: boolean | undefined) {
        this['detect_direction'] = detectDirection;
    }
    public get detectDirection() {
        return this['detect_direction'];
    }
}