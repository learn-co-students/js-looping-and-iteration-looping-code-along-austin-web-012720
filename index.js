// Code your solutions in this file
function countDown() {
    for(let i = 0; i < 11; i++) {
        console.log(i);
    }
}

function writeCards(array) {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        new_array.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
    return new_array;
}
