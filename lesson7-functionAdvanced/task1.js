function handleNum(number, callback1, callback2) {
  if (number % 2 === 0) {
    return callback1();
  } else {
    return callback2();
  }
}
function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}
handleNum(6, handleEven, handleOdd);
