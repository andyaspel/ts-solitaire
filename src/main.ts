"use strict";
import { Card, Colour, Column, Turned } from "./Card.ts";
let pos: Array<Column> = [0, 1, 6, 10];
let card: Card = { title: "QH.svg", colour: 0, table_position: pos, turned: 1 };
console.log("+++++++++++");
console.log(card);
console.log("+++++++++++");

function validateCard(card: Card): Boolean | undefined {
  if (card) {
    console.log(card);

    return true;
  }
  throw new Error("Card is invalid");
}
validateCard(card);
card.table_position.push(13);
console.log(card);
validateCard(card);
console.log(card);

// examples
const element = document.getElementById("test23");
let start, previousTimeStamp;
let done = false;

function step(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }
  const elapsed = timeStamp - start;

  if (previousTimeStamp !== timeStamp) {
    // Math.min() is used here to make sure the element stops at exactly 200px
    const count = Math.min(0.01 * elapsed, 1000);
    element.style.transform = `rotate3d(-3, 0, 0, ${-count}deg)`;
   
    if (count === 10) {
      console.log('test');
      
      return done = true;}
  }

  if (elapsed < 4500) {
    // Stop the animation after 2 seconds
    previousTimeStamp = timeStamp;
    if (!done) {
      window.requestAnimationFrame(step);
    }
  }
}

window.requestAnimationFrame(step);
