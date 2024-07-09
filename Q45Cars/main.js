"use strict";
// Function to create a car object
function createCar(manufacturer, model, ...args) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // Process additional arguments (assuming they are key-value pairs)
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i];
        const value = args[i + 1];
        car[key] = value;
    }
    return car;
}
// Example usage:
let car = createCar("Toyota", "Camry", "color", "Blue", "year", 2023, "transmission", "Automatic");
console.log(car);
