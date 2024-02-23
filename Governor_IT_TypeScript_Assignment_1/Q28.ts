let age = 65;

if (age < 2) {
    console.log("This person is baby");
}
else if (age > 2 && age < 4) {
    console.log("The person is a toddler");
}
else if (age > 4 && age < 13) {
    console.log("The person is a kid");
}
else if (age > 13 && age < 20) {
    console.log("The person is a teenage");
}
else if (age > 20 && age < 65) {
    console.log("The person is a adult");
}
else {
    console.log("The person is an elder")
}