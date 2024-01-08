function card() {
    console.log("joker");
  }

function receivesAFunction(card) {
    card();
  }

function returnsANamedFunction(){
     return function game (){
        console.log('Poker')
     }
}

function returnsAnAnonymousFunction(){
     return function (){
        console.log('Poker')
     }
}

