function writeCards(arrayFriends, string) {
    let cards = [];
    for (let i = 0; i < arrayFriends.length; i ++) {
      cards.push(`Thank you, ${arrayFriends[i]}, for the wonderful ${string} gift!`)
    }
    return cards
}
 function countDown(num) {
  while(num > 0) {
      console.log(num);
      num -= 1;
  }
  console.log(num);
 }
