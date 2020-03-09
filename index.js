

const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
wrapGifts(gifts);

function writeCards(names, event) {
    let thankYouCards = []
    for (let i = 0; i<names.length; i++){
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown (number){
    while(number > 0){
        console.log(number);
        number -= 1
    }
}
