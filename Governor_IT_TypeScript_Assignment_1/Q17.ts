let moreGuestList = ["Person1", "Person2", "Person3"];
moreGuestList[2] = "NewPerson";
moreGuestList.unshift("NewGuest1");
moreGuestList[4] = "NewGuest2";
moreGuestList.push("NewGuest3");

console.log("you can invite only two people for dinner");
moreGuestList.pop();
moreGuestList.pop();
moreGuestList.pop();
moreGuestList.pop();
console.log(`You are still in list ${moreGuestList[0]}`);
console.log(`You are still in list ${moreGuestList[1]}`);
moreGuestList.pop();
moreGuestList.pop();
console.log(moreGuestList);