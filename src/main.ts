"use strict";
//
import { Column, Deck } from "./Card.ts";
import   "./Table.ts";
//
let arr: (typeof Column)[] = [];
[Column].forEach((el) => {
  arr.push(el);
});
//
console.log("+++++++++++");
console.log(arr);
// deck.forEach((card) => validateCard(card));
console.log(Deck);
console.log("+++++++++++");
//
// function validateCard(card: Card): Boolean | undefined {
//   if (card) {
//     // console.log(card);
//     return true;
//   }
//   throw new Error("Card is invalid");
// }
//
