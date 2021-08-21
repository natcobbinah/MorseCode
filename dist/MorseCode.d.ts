export declare class MorseCodeGenerator {
    morseCodes: Map<any, any>;
    outputResult: string;
    userEntered_MorseCodeArray: Array<string>;
    constructor();
    output(): void;
    encode_toMorseCode(message: string): this;
    addMorseCode(morseCodeExpression: string): this;
    space(): this;
    decode_toHumanReadable(): this;
}
