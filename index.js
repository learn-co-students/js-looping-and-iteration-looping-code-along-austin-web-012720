// Code your solutions in this file
function writeCards(names, eventname) {
  let messages = [];
  for (let i = 0; i < names.length; i++){
  messages.push(`Thank you, ${names[i]}, for the wonderful ${eventname} gift!`);
  }
  return messages;
}

function countDown(integer){
  while (integer >= 0) {
    console.log(integer)
    integer --;
  }
}
