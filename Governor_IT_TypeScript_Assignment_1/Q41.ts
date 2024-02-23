function showMagician(magicianNames: string[]) {
    for (let magician in magicianNames) {
        console.log(`magician’s name is ${magicianNames[magician]}`);
    }
}

let namesOfMagician = ["magician1", "magician2", "magician3"];
showMagician(namesOfMagician);