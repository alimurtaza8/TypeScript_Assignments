function showMagician(magicianNames) {
    for (var magician in magicianNames) {
        console.log("magician\u2019s name is ".concat(magicianNames[magician]));
    }
}
var namesOfMagician = ["magician1", "magician2", "magician3"];
showMagician(namesOfMagician);
