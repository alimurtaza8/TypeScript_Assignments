function describeCity(city, country) {
    if (country === void 0) { country = "USA"; }
    console.log("".concat(city, " is in ").concat(country));
}
describeCity("New York");
describeCity("London", "United Kingdom");
describeCity("Paris", "France");
