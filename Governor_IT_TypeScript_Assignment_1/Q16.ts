let moreGuestLists = ["Person1", "Person2", "Person3"];

moreGuestLists[2] = "NewPerson";
console.log("We found a bigger dinner table.");

moreGuestLists.unshift("NewGuest1");
moreGuestLists[4] = "NewGuest2";
moreGuestLists.push("NewGuest3");

console.log(`Your are inviting to this dinner ${moreGuestLists[0]}`);
console.log(`Your are inviting to this dinner ${moreGuestLists[1]}`);
console.log(`Your are inviting to this dinner ${moreGuestLists[2]}`);
console.log(`Your are inviting to this dinner ${moreGuestLists[3]}`);
console.log(`Your are inviting to this dinner ${moreGuestLists[4]}`);
console.log(`Your are inviting to this dinner ${moreGuestLists[5]}`);


