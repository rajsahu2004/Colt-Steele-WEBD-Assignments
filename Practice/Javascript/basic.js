var numHens = 9;
console.log("numHens = " + numHens);
var numRoosters = 2;
console.log("numRoosters = " + numRoosters);
var numChickens = numHens + numRoosters;
console.log("numChickens = " + numChickens);
const inchInFeet = 12;
console.log("inchInFeet = " + inchInFeet);
var runDistance = 26.2;
console.log("runDistance = " + runDistance);
runDistance++;
console.log("runDistance++ = " + runDistance);
console.log("true = " + true);
console.log("12 = " + 12);
console.log("false = " + false);
let isActiveGame = true;
console.log(isActiveGame);
isActiveGame = false;
console.log(isActiveGame);
let isLoggedIn = false;
console.log(isLoggedIn);
isLoggedIn = 235235;
console.log(isLoggedIn);
let firstName = "Raj";
let lastName = "Sahu";
console.log(firstName + " " + lastName);
let animal = "Dumbo Octopus";
console.log(animal);
console.log(animal[7]);
let phone = "(231)345-1344";
console.log(phone[0]);
console.log(phone.length);
console.log("phone".length);
console.log("phone" + " number");
let msg = "Leave me alone right now i hate you plz";
console.log(msg);
console.log(msg.toUpperCase());
console.log("oermnLMVOEImvoOimevoIVmepmv".toLowerCase());
let userInput = "   hello m name is tim tom tammy ping pong";
console.log(userInput);
console.log(userInput.trim());
let greeting = " hello again!!!!";
console.log(greeting);
console.log(greeting.trim().toUpperCase());
let tvShow = "catdog";
console.log(tvShow);
console.log(tvShow.indexOf("cat"));
console.log(tvShow.indexOf("dog"));
console.log(tvShow.indexOf("o"));
console.log("haha that is so funny!".indexOf("is"));
console.log("haha that is so funny!".slice(5));
console.log("haha that is so funny!".slice(10, 12));
console.log("haha that is so funny!".slice(-10));
console.log(msg.replace(" i", " I"));
console.log("lol".repeat(5));
let product = "Artichoke";
let price = 3.99;
price = 2.25;
let qty = 5;
console.log(
  "You bought " + qty + " " + product + ". Total is : " + price * qty
);
console.log(null);
console.log(undefined);
console.log(Math);
console.log(Math.floor(4654.4684));
console.log(Math.ceil(4654.4684));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * 5);
console.log(Math.random() * 5);
console.log(Math.floor(Math.random() * 50 + 1));
console.log(Math.floor(Math.random() * 50 + 1));
console.log(Math.floor(Math.random() * 50 + 1));
console.log(Math.floor(Math.random() * 50 + 1));
console.log(Math.floor(Math.random() * 50 + 1));
console.log(Math.floor(Math.random() * 50 + 1));
console.log(Math.floor(Math.random() * 50 + 1));
console.log(Math.floor(Math.random() * 50 + 1));
console.log(Math.floor(Math.random() * 50 + 1));
console.log(Math.floor(Math.random() * 50 + 1));
console.log(Math.floor(Math.random() * 50 + 1));
console.log(Math.floor(Math.random() * 50 + 1));
console.log(Math.floor(Math.random() * 50 + 1));
console.log(Math.floor(Math.random() * 18 + 2004));
console.log(Math.floor(Math.random() * 18 + 2004));
console.log(Math.floor(Math.random() * 18 + 2004));
console.log(Math.floor(Math.random() * 18 + 2004));
console.log(Math.floor(Math.random() * 18 + 2004));
console.log(Math.floor(Math.random() * 18 + 2004));
console.log(Math.floor(Math.random() * 18 + 2004));
console.log(Math.floor(Math.random() * 18 + 2004));
console.log(Math.floor(Math.random() * 18 + 2004));
console.log(Math.floor(Math.random() * 18 + 2004));
console.log(Math.floor(Math.random() * 18 + 2004));
console.log(Math.floor(Math.random() * 18 + 2004));
console.log(Math.floor(Math.random() * 18 + 2004));
console.log(Math.floor(Math.random() * 18 + 2004));
// alert("hello");
// const password = prompt("Please type password");
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid Password");
//   } else {
//     console.log("Password cannot contain spaces!!");
//   }
// } else {
//   console.log("Password too short!! Must be 6+ characters");
// }
console.log(true);
const day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Sunday");
    break;
}
let name = [];
let days = ["Monday", "Tuesday"];
console.log(days.length);
days[6] = "Sunday";
console.log(days);
days[2] = "Wednesday";
console.log(days);
let members = ["Raj", "Preet", "Laxman"];
console.log(members);
members.push("Rudra");
console.log(members);
members.pop();
console.log(members);
members.shift();
console.log(members);
members.unshift("Sahu");
console.log(members);
let cats = ["blue", "kitty"];
let dogs = ["rusty", "wyatt"];
console.log(cats.concat(dogs));
let catsAndDogs = cats.concat(dogs);
console.log(catsAndDogs);
console.log(catsAndDogs.indexOf("rusty"));
console.log(catsAndDogs.indexOf("Rusty"));
console.log(catsAndDogs.reverse());
console.log(catsAndDogs);
catsAndDogs.push("whitey");
console.log(catsAndDogs);
let rainbow = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
console.log(rainbow.slice());
console.log(rainbow.slice(3));
console.log(rainbow.slice(5));
console.log(rainbow.slice(3, 5));
console.log(rainbow.slice(2, 4));
console.log("Warm Colors : " + rainbow.slice(0, 3));
let months = ["january", "february", "march", "april", "june", "july"];
console.log(months.splice(3, 1));
console.log(months);
console.log(months.splice(4, 1, "august"));
console.log(months);
console.log(months.splice(3, 0, "april"));
console.log(months);
let scores = [21, 465, 1, 684, 4, 54, -89];
console.log(scores.sort());
console.log(["raj"] === ["raj"]);
console.log(["raj", "sahu"] === ["raj", "sahu"]);
console.log(["raj", "sahu"] == ["raj", "sahu"]);
console.log([1] == [1]);
console.log([] == []);
let nums = [1, 2, 3];
let numsCopy = nums;
console.log(numsCopy);
console.log(numsCopy.push(4));
console.log(nums);
const subjects = ["math", "physics", "chemistry"];
console.log(subjects);
subjects.push("english");
console.log(subjects);
const gameBoard = [
  ["X", "O", "X"],
  ["O", null, "X"],
  ["O", "O", "X"],
];
console.log(gameBoard);
console.log(gameBoard[1][1]);
const person = { firstName: "Raj", lastName: "Sahu" };
console.log(person);
console.log(person["firstName"]);
console.log(person.lastName);
const years = { 2004: "GOOD", 2022: "BAD" };
console.log(years);
console.log(years["2004"]);
console.log(years[2022]);
const dumdum = { true: "dat", null: "adasdasd" };
console.log(dumdum[true]);
console.log(dumdum[null]);
console.log(dumdum["nu" + "ll"]);
const midterms = { raj: 96, sahu: 78 };
console.log(midterms.raj);
midterms.raj = 99;
console.log(midterms.raj);
console.log(midterms);
midterms.sahu = "B+";
console.log(midterms.sahu);
midterms.preeti;
midterms.preeti = "A";
console.log(midterms);
midterms["rudra"] = "C";
console.log(midterms);
const comments = [
  { username: "tammy", text: "lololol", votes: 9 },
  { username: "Fishboy", text: "glub glob", votes: 12387 },
];
console.log(comments[1].votes);
for (let i = 1; i < 20; i += 2) {
  console.log("hello", i);
}
for (let i = 100; i > 0; i--) {
  console.log("hello", i);
}
const subreddits = [
  "cringe",
  "books",
  "chickens",
  "funny",
  "pics",
  "soccer",
  "gunner",
];
for (let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits[i]}`);
}
for (let sub of subreddits) {
  console.log(`Visit reddit.com/r/${sub}`);
}
const seatingChart = [
  ["Kristan", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];
for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
for (let row of seatingChart) {
  for (let student of row) {
    console.log(student);
  }
}
for (let char of "My name is Raj Sahu") {
  console.log(char);
}
const testScores = {
  Raj: 945,
  Raman: 576,
  Mahesh: 5,
  Joy: 486,
  Abhay: 5.1,
  Abhinav: 5648,
  Kartikey: 5321,
  Aman: 55,
  Mejar: 156,
};
for (let name in testScores) {
  console.log(`${name} scored ${testScores[name]}`);
}
console.log(Object.keys(testScores));
console.log(Object.values(testScores));
console.log(Object.entries(testScores));
let total = 0;
let marks = Object.values(testScores);
for (let score of marks) {
  total += score;
}
console.log(total / marks.length);
