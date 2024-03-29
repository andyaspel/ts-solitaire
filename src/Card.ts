"use strict";

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
