// // Code your solutions in this filed
// const writeCards = [ 'Lisa', 'Kaitlin', 'Jan' ];
 
// function thankyouCard(writeCards) {
//   let i = 0; // the initialization moved OUTSIDE the body of the loop!
//   while (i < writeCards.length) {
//     console.log(`Thank you, ${writeCards}, for the wonderful surprise gift!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }
 
//   return writeCards;
// }


function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }

  
  
  function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }