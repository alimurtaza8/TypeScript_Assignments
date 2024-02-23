function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

const originalMagicians: string[] = ["Merlin", "Gandalf", "Dumbledore"];

const greatMagicians: string[] = make_great([...originalMagicians]);

console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
