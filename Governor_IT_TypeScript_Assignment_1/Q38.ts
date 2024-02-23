function describeCity(city: string, country: string = "USA") {
    console.log(`${city} is in ${country}`);
}

describeCity("New York");
describeCity("London", "United Kingdom");
describeCity("Paris", "France");