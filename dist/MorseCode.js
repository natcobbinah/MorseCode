"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MorseCodeGenerator = void 0;
class MorseCodeGenerator {
    constructor() {
        //used [method chaining] to implement add morseCodeStrings
        this.morseCodes = new Map();
        this.outputResult = "";
        this.userEntered_MorseCodeArray = [];
        this.morseCodes
            .set("A", "._")
            .set("B", "_...")
            .set("C", "_._.")
            .set("D", "_..")
            .set("E", ".")
            .set("F", ".._.")
            .set("G", "_ _.")
            .set("H", "....")
            .set("I", "..")
            .set("J", "._ _ _")
            .set("K", "_._")
            .set("L", "._..")
            .set("M", "_ _")
            .set("N", "_.")
            .set("O", "_ _ _")
            .set("P", "._ _.")
            .set("Q", "_ _._")
            .set("R", "._.")
            .set("S", "...")
            .set("T", "_")
            .set("U", ".._")
            .set("V", "..._")
            .set("W", "._ _")
            .set("X", "_.._")
            .set("Y", "_._ _")
            .set("Z", "_ _ ..")
            .set("1", "._ _ _ _")
            .set("2", ".._ _ _")
            .set("3", "..._ _")
            .set("4", "...._")
            .set("5", ".....")
            .set("6", "_....")
            .set("7", "_ _ ...")
            .set("8", "_ _ _..")
            .set("9", "_ _ _ _.")
            .set("0", "_ _ _ _ _")
            .set(".", "._._._")
            .set(",", "_ _.._ _")
            .set("?", ".._ _..")
            .set(":", "_ _ _ ...")
            .set(";", "_._._.")
            .set("-", "_...._")
            .set("/", "_.._.")
            .set("''", "._.._.")
            .set("'", "._ _ _ _.")
            .set("(", "_._ _.")
            .set(")", "_._ _._")
            .set("=", "_..._")
            .set("+", "._._.")
            .set("$", "..._.._")
            .set("¶", "._._..")
            .set("_", ".._ _._")
            .set("Ü", ".._ _")
            .set("Ä", "._._")
            .set("Ö", "_ _ _.");
    }
    output() {
        return console.log(this.outputResult);
    }
    //Pass a sentence or word as an argument to the fxn and have it converted into morseCode
    encode_toMorseCode(message) {
        let morseCodeTranslation = [];
        let sentence = message.split("");
        let spaceChar = " ";
        sentence.forEach((letter) => {
            this.morseCodes.forEach((value, value_Letter) => {
                if (letter.toUpperCase() === value_Letter) {
                    morseCodeTranslation.push(value);
                }
            });
            morseCodeTranslation.push(spaceChar);
        });
        this.outputResult = morseCodeTranslation.join(spaceChar);
        return this;
    }
    //add morseCodeString
    addMorseCode(morseCodeExpression) {
        this.userEntered_MorseCodeArray.push(morseCodeExpression);
        return this;
    }
    //add Space Character to format MorseCode String
    space() {
        this.userEntered_MorseCodeArray.push("");
        this.userEntered_MorseCodeArray.push("");
        return this;
    }
    //Pass morseCode as an argument string to the fxn and have it converted to human readable format.
    decode_toHumanReadable() {
        let humanReadableTranslation = [];
        let spaceChar = "";
        this.userEntered_MorseCodeArray.forEach((morseValue) => {
            this.morseCodes.forEach((value, value_Letter) => {
                if (morseValue === value) {
                    humanReadableTranslation.push(value_Letter.toLowerCase());
                }
            });
            humanReadableTranslation.push(spaceChar);
        });
        this.outputResult = humanReadableTranslation.join(" ");
        return this;
    }
}
exports.MorseCodeGenerator = MorseCodeGenerator;
//# sourceMappingURL=MorseCode.js.map