var currUsers = ["CurrUser1", "CurrUser2", "CurrUser3", "CurrUser4", "CurrUser5"];
var newUsers = ["NewUser1", "CurrUser2", "NewUser2", "NewUser3", "CurrUser5"];
for (var i = 0; i < newUsers.length; i++) {
    if (newUsers[i].match(currUsers[i])) {
        console.log("The person will need to enter a new username");
    }
    else {
        console.log("The username is available");
    }
}
