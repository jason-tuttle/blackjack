/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the console.logions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let result = 0;
  let aces = 0;
  for (i in hand) {
    let card = hand[i]
    if (card === "J" || card === "Q" || card === "K") {
      result += 10;
    } else if (card === "A") {
      aces++;
      result += 11;
    } else {
      result += parseInt(card, 10);
    }
  }
  if (result > 21) {
    result -= aces * 10;
  }
  return result;
}
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
