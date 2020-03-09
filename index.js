// Code your solutions in this file
function writeCards(names, giftType) {
    let retArr = [];
    for (let i = 0; i < names.length; i++) {
        retArr.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`);
    }

    return retArr;
}

function countDown(endingNum) {
    for(let i = endingNum; i >= 0; i--) {
        console.log(i);
    }
}