import { WordInfo } from './WordInfo';


export class Result {
    public text: string;
    public score: number;
    private 'word_info'?: Array<WordInfo> | undefined;
    public constructor(text?: any, score?: any) { 
        this['text'] = text;
        this['score'] = score;
    }
    public withText(text: string): Result {
        this['text'] = text;
        return this;
    }
    public withScore(score: number): Result {
        this['score'] = score;
        return this;
    }
    public withWordInfo(wordInfo: Array<WordInfo>): Result {
        this['word_info'] = wordInfo;
        return this;
    }
    public set wordInfo(wordInfo: Array<WordInfo> | undefined) {
        this['word_info'] = wordInfo;
    }
    public get wordInfo() {
        return this['word_info'];
    }
}