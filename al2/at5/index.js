const accounts = ["perseus","Destroyer","accontTest123","Hello"];
const newAccounts = "jumentovei";
const bannedAccounts = accounts.splice(-2, 2, newAccounts);

console.log(accounts);
console.log(bannedAccounts);