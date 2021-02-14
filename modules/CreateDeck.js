"use strict";

class CreateDeck {
  constructor() {
    this.deck = [];
    this.suitsDeck = [];
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
    return this.deck;
  }
  shuffleDeck(times = 1) {
    if (this.deck.length === 0) {
      this.buildDeck();
    }
    const shuffle = this.deck;
    for (let i = 0; i < times; i++) {
      console.log(i);
      for (let j = shuffle.length - 1; j > 0; j--) {
        console.log(j);
        const swapIndex = Math.floor(Math.random() * (j + 1));
        const currentCard = shuffle[j];
        const cardToSwap = shuffle[swapIndex];
        shuffle[j] = cardToSwap;
        shuffle[swapIndex] = currentCard;
      }
    }
    return this.deck;
  }

  splitDeckShuffle() {
    if (this.deck.length === 0) {
      this.buildDeck();
    }
    let topDeck = [];
    let bottomDeck = [];
    const newDeck = this.deck;
    let index = 0;
    for (let j = 0; j < this.deck.length; j++) {
      if (j < 26) {
        this.deck[j].index = ++index;
        topDeck.push(this.deck[j]);
      } else if (j >= 26) {
        this.deck[j].index = ++index - 26;
        bottomDeck.push(this.deck[j]);
      }
    }
    this.suitsDeck = [...bottomDeck, ...topDeck];
    console.log(this.suitsDeck, newDeck);
    return this.suitsDeck;
   
  }
}

export default CreateDeck;
