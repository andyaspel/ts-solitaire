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
  ["title"]: String;
  ["colour"]: Colour;
  ["table_position"]: Array<Column>;
  ["turned"]: Turned;
};
//
export const image_src: String = "/images/";
export const deck: Array<Card> = [];
export const back: String = "/images/C1.svg";
//
create_cards();
deck.forEach((_) => {
  shuffle_cards(deck);
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
      deck.push({
        title: face_values[j] + suit_values[i],
        colour: colour,
        table_position: [0],
        turned: Turned.False,
      });
    }
  }
}
//
function shuffle_cards(cards: Array<Card>): void {
  let swap = cards[0];
  cards.forEach((_, index) => {
    let random: number = Math.floor(Math.random() * 52);
    while (index === random) {
      random = Math.floor(Math.random() * 52);
    }
    swap = cards[index];
    cards[index] = cards[random];
    cards[random] = swap;
  });
}
// add shuffle + deck_position to Card object(mabe more props later??)
// build board structure:- deck,drawn,1,2,3,4,5,6,7,S,D.C.H sections
// design functionsfor computer to play game
