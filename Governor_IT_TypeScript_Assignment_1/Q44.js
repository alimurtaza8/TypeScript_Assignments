function makeSandwich() {
    var toppings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toppings[_i] = arguments[_i];
    }
    console.log("Sandwich with:");
    if (toppings.length === 0) {
        console.log(" - No toppings");
    }
    else {
        toppings.forEach(function (topping, index) {
            console.log(" - ".concat(index + 1, ". ").concat(topping));
        });
    }
    console.log("Enjoy your sandwich!\n");
}
makeSandwich("Cheese", "Ham", "Lettuce");
makeSandwich("Turkey", "Tomato");
makeSandwich();
