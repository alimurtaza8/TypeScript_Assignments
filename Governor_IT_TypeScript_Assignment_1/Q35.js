var animalNames = ["Cat", "Dog", "Rabbits"];
for (var animal in animalNames) {
    console.log("A ".concat(animalNames[animal], " would make a great pet"));
}
console.log("".concat(animalNames[0], " is a great pet"));
