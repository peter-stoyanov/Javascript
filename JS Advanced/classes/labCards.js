var defineCards = (function(){
     var Suits = {
          CLUBS: "\u2663",    // ♣
          DIAMONDS: "\u2666", // ♦
          HEARTS: "\u2665",   // ♥
          SPADES: "\u2660"    // ♠
     };

     var Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

     class Card {
          constructor (face, suit) {
               this.face = face;
               this.suit = suit;
          }
          get face() {
               return this._face;
          }
          set face(f){
               if (!Faces.includes(f)) {
                    throw new Error("Invalid card face: " + face);
               };
               this._face = f;
          }
          get suit() {
               return this._suit;
          }
          set suit(s){
               if (!Suits.includes(s)) {
                    throw new Error("Invalid suit: " + suit);
               };
               this._suit = s;
          }
          toString(){
               return `${this.face}${this.suit}`;
          }
     }

     return { Suits, Card};

})();

var Suits = defineCards.Suits;
var Card = defineCards.Card;

var card = new Card("Q",Suits.DIAMONDS);
console.log('' + card);
