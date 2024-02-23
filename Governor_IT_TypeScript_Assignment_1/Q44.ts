function makeSandwich(...toppings: string[]): void {
    console.log("Sandwich with:");

    if (toppings.length === 0) {
        console.log(" - No toppings");
    } else {
        toppings.forEach((topping, index) => {
            console.log(` - ${index + 1}. ${topping}`);
        });
    }

    console.log("Enjoy your sandwich!\n");
}

makeSandwich("Cheese", "Ham", "Lettuce");
makeSandwich("Turkey", "Tomato");
makeSandwich(); 
