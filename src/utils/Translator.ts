
import lang_de from '../data/de/fields.json';
import lang_en from '../data/en/fields.json';

export enum Lang {DE='de',EN='en',AR='ar'}
export type Langs = Record<string,Record<string,string>>;
export class Translator{
    
    private langs:Langs = {
    };
    private curLang:Lang = Lang.DE;

    constructor(){
        this.langs[Lang.DE] = lang_de;
        this.langs[Lang.EN] = lang_en;
    }

    public setLanguage(newLang:Lang){
        this.curLang = newLang;
    }

    public t(key:any){
        return this.langs[this.curLang][key];
    }
    public tl(lang:Lang, key:any){
        return this.langs[lang][key];
    }    
    public getCurrentLang():Lang{
        return this.curLang;
    }
}

const translator = new Translator();
export default translator;