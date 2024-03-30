"use strict";
//
import { Card, Column, deck } from "./Card.ts";

//
let arr: (typeof Column)[] = [];
[Column].forEach((el) => {
  arr.push(el);
});

console.log("+++++++++++");
console.log(arr);
deck.forEach((card) => validateCard(card));
console.log("+++++++++++");

function validateCard(card: Card): Boolean | undefined {
  if (card) {
    console.log(card);
    return true;
  }
  throw new Error("Card is invalid");
}
