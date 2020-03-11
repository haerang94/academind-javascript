// Number One
// while (true) {
//   const ranNum = Math.random();
//   if (ranNum > 0.7) {
//     alert(`Number is ${ranNum}`);
//     break;
//   }
// }
const myArray = [2, 6, 4, 6, 17, 23];
//Num Two
// for (const ele of myArray) {
//   console.log(ele);
// }

//Number Three

// for (let i = myArray.length - 1; i >= 0; i--) {
//   console.log(myArray[i]);
// }

//Number Four
while (true) {
  const firstRand = Math.random();
  const secondRand = Math.random();
  if (
    (firstRand > 0.7 && secondRand > 0.7) ||
    firstRand < 0.2 ||
    secondRand < 0.2
  ) {
    alert(`${firstRand}, ${secondRand}`);
    break;
  }
}
