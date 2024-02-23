var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == i + 1) {
        if (i + 1 === 1) {
            console.log("".concat(i + 1, "st"));
        }
        else if (i + 1 === 2) {
            console.log("".concat(i + 1, "nd"));
        }
        else if (i + 1 === 3) {
            console.log("".concat(i + 1, "rd"));
        }
        else {
            console.log("".concat(i + 1, "th"));
        }
    }
}
