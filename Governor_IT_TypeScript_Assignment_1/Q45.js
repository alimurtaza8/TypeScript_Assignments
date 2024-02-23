function createCar(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    extras.forEach(function (extra) {
        var key = Object.keys(extra)[0];
        car[key] = extra[key];
    });
    return car;
}
var myCar = createCar("Toyota", "Camry", { color: "Blue", hasSunroof: true });
console.log(myCar);
