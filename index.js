// Code your solutions in this file

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }

//   let countup = 0;
// while (countup < 10) {
//   console.log(countup++);
// }

// function countDown(num) {
//     while (num > 0) {
//         console.log(num)
//         num -= 1;
//     }
//     console.log(num)
// }

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }