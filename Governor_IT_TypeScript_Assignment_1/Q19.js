var moreGuest = ["Person1", "Person2", "Person3"];
moreGuest[2] = "NewPerson";
moreGuest.unshift("NewGuest1");
moreGuest[4] = "NewGuest2";
moreGuest.push("NewGuest3");
console.log("Totall Guests are invited ".concat(moreGuest.length));
