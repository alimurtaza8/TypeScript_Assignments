interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): Car {
    const car: Car = {
        manufacturer,
        modelName,
    };

    extras.forEach(extra => {
        const key = Object.keys(extra)[0];
        car[key] = extra[key];
    });

    return car;
}

const myCar = createCar("Toyota", "Camry", { color: "Blue", hasSunroof: true });
console.log(myCar);
