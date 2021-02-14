"use strict";

class Rules {
  constructor(deck) {
    this.test(deck);
    this.ruleSuits;
    this.ruleMove;
  }
   

  test(deck) {
    if (deck) {
      console.log(deck);
    }
    console.log("hello");
  }
}
export default Rules;
