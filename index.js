// Code your solutions in this file
function writeCards(person,event) {
    let thankYouCards = []
    for (let i = 0; i < person.length; i++) {
        thankYouCards.push(`Thank you, ${person[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}

function countDown(num) {
    while (num > 0) {
        console.log(num);
        num -= 1;
    }
    console.log( num );
}
