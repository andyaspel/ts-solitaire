"use strict";

class CreateDeck {
  constructor() {
    this.deck = [];
    this.shuffledDeck = [];
  }

  buildDeck() {
    const values = [
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
    const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
    let index = 0;
    suits.forEach((suit) => {
      values.forEach((value) => {
        ++index;
        this.deck.push({
          value: value,
          suit: suit,
          key: `${value}${suit.slice(0, 1)}`,
          id: index,
        });
      });
    });
    return [...this.deck];
  }

  shuffleDeck(times = 1) {
    if (this.deck.length === 0) {
      this.buildDeck();
    }
    const shuffle = [...this.deck];
    for (let i = 0; i < times; i++) {
      this.splitDeckShuffle();
      for (let j = shuffle.length - 1; j > 0; j--) {
        const swapIndex = Math.floor(Math.random() * (j + 1));
        const currentCard = shuffle[j];
        const cardToSwap = shuffle[swapIndex];
        shuffle[j] = cardToSwap;
        shuffle[swapIndex] = currentCard;
      }
    }
    this.shuffledDeck = shuffle;
    return this.shuffledDeck;
  }

  splitDeckShuffle(splitPosition = 26) {
    if (this.deck.length === 0) {
      this.buildDeck();
    }
    let topDeck = [];
    let bottomDeck = [];
    for (let j = 0; j < this.deck.length; j++) {
      if (j < splitPosition) {
        this.deck[j].pos = (j + 1) * 2;
        topDeck.push(this.deck[j]);
      } else {
        this.deck[j].pos = topDeck[j - 26].pos - 1;
        bottomDeck.push(this.deck[j]);
      }
    }
    this.shuffledDeck = [...bottomDeck, ...topDeck];
    this.shuffledDeck.sort(function (a, b) {
      return a.pos > b.pos ? 1 : -1;
    });
    return this.shuffledDeck;
  }
}

export default CreateDeck;
