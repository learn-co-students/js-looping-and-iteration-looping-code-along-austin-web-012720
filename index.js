// Code your solutions in this file
const newArray =[];
function writeCards(array,name) {
  for (let i =0; i < array.length;i++ ){


    newArray.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)

  }
  return newArray
}
function countDown(num){
  while (num >= 0) {
    console.log(num--);

  }
}
