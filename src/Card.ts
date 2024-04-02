"use strict";
//
export enum Colour {
  Red,
  Black,
}
//
export enum Column {
  Deck,
  Swap_1,
  Swap_2,
  Swap_3,
  Swap_4,
  Swap_5,
  Swap_6,
  Swap_7,
  Draw,
  Spades,
  Diamonds,
  Clubs,
  Hearts,
}
//
export enum Turned {
  True,
  False,
}
//
export type Card = {
  title: String;
  colour: Colour;
  table_row: Array<Column>;
  turned: Turned;
};
//
export let image_src: String = "/images/";
export const Deck: Array<Card> = [];
export let back: String = "/images/C1.svg";
//
create_cards();
Deck.forEach((_) => {
  shuffle_cards(Deck);
});
//
function create_cards(): void {
  const face_values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
  ].reverse();
  const suit_values = ["H", "D", "C", "S"];
  for (let i = 0; i < suit_values.length; i++) {
    for (let j = 0; j < face_values.length; j++) {
      let colour = 0;
      if (suit_values[i] === "S" || suit_values[i] === "C") {
        colour = Colour.Black;
      } else {
        colour = Colour.Red;
      }
      let obj = Object.assign({
        title: face_values[j] + suit_values[i],
        colour: colour,
        table_row: [0],
        turned: false,
      });
      Deck.push(obj);
    }
  }
}
//
function shuffle_cards(cards: Array<Card>): void {
  let swap = cards[0];
  const max: number = 52;
  cards.forEach((_, i) => {
    let random: number = Math.floor(Math.random() * max);
    while (i === random) {
      random = Math.floor(Math.random() * max);
    }
    swap = cards[i];
    cards[i] = cards[random];
    cards[random] = swap;
  });
}
//
