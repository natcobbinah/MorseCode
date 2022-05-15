# MorseCodeGenerator

Although Morse code has absolutely nothing to do with computers, becoming familiar with the nature of 
codes is an essential preliminary to achieving a deep understanding of the hidden languages and inner 
structures of computer hardware and software.
> [CODE by Charles Petzold]

Receiving Morse code and translating it back into words is considerably harder and more time consuming 
than sending because you must work backward to figure out the letter that corresponds to a particular 
coded sequence of dots and dashes.

This project therefore aims to simplify **encoding** and **decoding** of morseCode to **human readable format**
and **vice versa** for learning and other purposes which can only be defined by the user

## Methods
| Function                                   |                                            Defintion                                            |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| addMorseCode(**morseCodeExpression : string**) | [**@param morseCodeExpression**] method  supports chaining to add a new morseCode to be decoded to  human readable output
|                                            | [**@returns**] A string  added to an array comprising of morse codes to be decoded                  |
| space()                                    | [**@returns**] an empty string, added to an array comprising of morse codes to be decoded,      adding formatting to the morseCodes  to be output to  console
| decode_toHumanReadable()                   | [**@returns**] Human Readable Format of user entered morseCode expression                           |
| encode_toMorseCode(**message : string**)       | [**@param message**] Pass a sentence or word as an argument to the fxn (encode_toMorseCode) and have it converted into morseCode 
|                                            | [**@returns**] morseCode translation equivalent as a string                            |             
| output()                                   | [**@returns**] String output after encoded or decoded operation to the console                      |

 
### Pipe Operations
> On Encoding
      ```
       morseCodeGeneratorInstance > encode_toMorseCode(argx) > output()
      ```

> On Decoding
      ```
       morseCodeGeneratorInstance > addMorseCode(argx) > space(){optional if not needed} > decode_toHumanReade() > output()
      ```

## Using classes in the package
###### Javascript
    let morseCode = require("morse-code-generator");
    let results = new morseCode.MorseCodeGenerator();
    
    //encoding a string of words or sentences to morseCode
    results.encode_toMorseCode("Hello World").output();
    
    //decoding morseCode to Human readable format 
    results
      .addMorseCode("....")
      .addMorseCode(".")
      .addMorseCode("._..")
      .addMorseCode("._..")
      .addMorseCode("_ _ _")
      .space()
      .addMorseCode("._ _")
      .addMorseCode("_ _ _")
      .addMorseCode("._.")
      .addMorseCode("._..")
      .addMorseCode("_..")
      .decode_toHumanReadable()
      .output();
      
      //results
      ....   .   ._..   ._..   _ _ _     ._ _   _ _ _   ._.   ._..   _..  
      h  e  l  l  o    w  o  r  l  d 

###### TypeScript
    import {MorseCodeGenerator} from "morse-code-generator";
    const results = new MorseCodeGenerator();

    //encoding a string of words or sentences to morseCode
    results.encode_toMorseCode("Hello World").output();
    
    //decoding morseCode to Human readable format 
    results
      .addMorseCode("....")
      .addMorseCode(".")
      .addMorseCode("._..")
      .addMorseCode("._..")
      .addMorseCode("_ _ _")
      .space()
      .addMorseCode("._ _")
      .addMorseCode("_ _ _")
      .addMorseCode("._.")
      .addMorseCode("._..")
      .addMorseCode("_..")
      .decode_toHumanReadable()
      .output();
      
      //results
      ....   .   ._..   ._..   _ _ _     ._ _   _ _ _   ._.   ._..   _..  
      h  e  l  l  o    w  o  r  l  d 

# MorseCode Chart Adapted from Charles Petzold Book [CODE]
      "A" = "._"
      "B" = "_..."
      "C" = "_._."
      "D" = "_.."
      "E" = "."
      "F" = ".._."
      "G" = "_ _."
      "H" = "...."
      "I" = ".."
      "J" = "._ _ _"
      "K" = "_._"
      "L" = "._.."
      "M" = "_ _"
      "N" = "_."
      "O" = "_ _ _"
      "P" = "._ _."
      "Q" = "_ _._"
      "R" = "._."
      "S" = "..."
      "T" = "_"
      "U" = ".._"
      "V" = "..._"
      "W" = "._ _"
      "X" = "_.._"
      "Y" = "_._ _"
      "Z" = "_ _ .."
      
      "1" = "._ _ _ _"
      "2" = ".._ _ _"
      "3" = "..._ _"
      "4" = "...._"
      "5" = "....."
      "6" = "_...."
      "7" = "_ _ ..."
      "8" = "_ _ _.."
      "9" = "_ _ _ _."
      "0" = "_ _ _ _ _"
      
      "." = "._._._"
      "," = "_ _.._ _"
      "?" = ".._ _.."
      ":" = "_ _ _ ..."
      ";" = "_._._."
      "-" = "_...._"
      "/" = "_.._."
      "''" = "._.._."
      "'"  = "._ _ _ _."
      "("  =  "_._ _."
      ")"  = "_._ _._"
      "="  = "_..._"
      "+"  = "._._."
      "$"  = "..._.._"
      "¶"  = "._._.."
      "_"  = ".._ _._"
      "Ü"  = ".._ _"
      "Ä"  = "._._"
      "Ö"  = "_ _ _."
