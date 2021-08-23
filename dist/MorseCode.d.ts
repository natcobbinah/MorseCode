export declare class MorseCodeGenerator {
    morseCodes: Map<any, any>;
    outputResult: string;
    userEntered_MorseCodeArray: Array<string>;
    constructor();
    /**
     * @returns String output after encoded or decoded operation
     */
    output(): void;
    /**
     * @param message Pass a sentence or word as an argument to the fxn (encode_toMorseCode) and have it converted into morseCode
     * @returns morseCode translation equivalent as a string
     */
    encode_toMorseCode(message: string): this;
    /**
     * @param morseCodeExpression method which supports chaining to add a new morseCode to be decoded
     * to human readable output
     * @returns A string  added to an array comprising of morse codes to be decoded
     */
    addMorseCode(morseCodeExpression: string): this;
    /**
     * @returns an empty string, added to an array comprising of morse codes to be decoded,
     * adding formattings to the morseCodes
     */
    space(): this;
    /**
     * @returns Human Readable Format of user entered morseCode expression
     */
    decode_toHumanReadable(): this;
}
