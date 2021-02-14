import CreateDeck from "./modules/CreateDeck.js";
import Rules from "./modules/Rules.js";

console.log("I am alive!");
let test = new CreateDeck();
let test3 = new Rules(test);
test3.test();
console.log(test3);
test.shuffleDeck(3);
// test.splitDeckShuffle();
// test.buildDeck();
console.log(test);

