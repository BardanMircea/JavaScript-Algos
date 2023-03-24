// Write a module toNato that exports a function toNato.

// The function toNato takes a string as argument, and returns the string translated to NATO phonetics. (For example, with that system, X becomes Xray.)

// The punctuation will remain unchanged in the translation, but the whitespaces will be removed.

// Be sure to handle both lowercase and uppercase characters.
// Examples
// This: toNato("Hi, I am Sunny.")
// Will return: HotelIndia,IndiaAlfaMikeSierraUniformNovemberNovemberYankee.

// This: toNato("The X factor")
// Will return: TangoHotelEchoXrayFoxtrotAlfaCharlieTangoOscarRomeo

const toNato = (str) => {

    const nato = {
            a: "Alfa",
            b: "Bravo",
            c: "Charlie",
            d: "Delta",
            e: "Echo",
            f: "Foxtrot",
            g: "Golf",
            h: "Hotel",
            i: "India",
            j: "Juliett",
            k: "Kilo",
            l: "Lima",
            m: "Mike",
            n: "November",
            o: "Oscar",
            p: "Papa",
            q: "Quebec",
            r: "Romeo",
            s: "Sierra",
            t: "Tango",
            u: "Uniform",
            v: "Victor",
            w: "Whiskey",
            x: "Xray",
            y: "Yankee",
            z: "Zulu"
        };

    str = str.replace(/\s/g, "").toLowerCase();
    
    let natoString= "";
    for(let char of str){
        if(char in nato){
            natoString += nato[char]
        } else {
            natoString += char
        }
        
    }
    return natoString;
}

module.exports = toNato



