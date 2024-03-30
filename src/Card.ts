"use strict";
//
export enum Colour {
  Red,
  Black,
}

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

export enum Turned {
  True,
  False,
}

export type Card = {
  ["title"]: String;
  ["colour"]: Colour;
  ["table_position"]: Array<Column>;
  ["turned"]: Turned;
};

export const image_src: String = "/images/";
export const deck: Array<Card> = [];
export const back: String = "/images/C1.svg";

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
  ];
  const suit_values = ["S", "D", "C", "H"];
  for (let i = 0; i < suit_values.length; i++) {
    for (let j = 0; j < face_values.length; j++) {
      let colour = 0;
      if (suit_values[i] === "S" || suit_values[i] === "C") {
        colour = Colour.Red;
      } else {
        colour = Colour.Black;
      }
      deck.push({
        title: face_values[j] + suit_values[i],
        colour: colour,
        table_position: [0],
        turned: Turned.False,
      });
    }
  }
  // console.log(deck);
}
create_cards();
// add shuffle + deck_position to Card object(mabe more props later??)
// build board structure:- deck,drawn,1,2,3,4,5,6,7,S,D.C.H sections
// design functionsfor computer to play game