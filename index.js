function writeCards(namesAry) {
    var newAry = [];
    for (let i = 0; i < namesAry.length; i++) {
        newAry.push(`Thank you, ${namesAry[i]}, for the wonderful surprise gift!`);
    }
    return newAry;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--)
    }
}