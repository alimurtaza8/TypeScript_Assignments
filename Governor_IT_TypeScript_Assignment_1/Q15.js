var guestLists = ["Person1", "Person2", "Person3"];
console.log("".concat(guestLists[2], " can\u2019t make the dinner"));
guestLists[2] = "NewPerson";
console.log("Your are inviting to this dinner ".concat(guestLists[0]));
console.log("Your are inviting to this dinner ".concat(guestLists[1]));
console.log("Your are inviting to this dinner ".concat(guestLists[2]));
