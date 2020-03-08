// Code your solutions in this file
function writeCards (name, event) {
  let result = []
  for (let i = 0; i < name.length; i++) {
    result.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return result;
}

function countDown (num) {
  let i = num;
  while (i >= 0) {
    console.log(i);
    i -= 1;
  }

}