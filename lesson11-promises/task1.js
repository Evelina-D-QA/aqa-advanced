function text(text) {
  console.log(`${text}`);
}
setTimeout(text, 3000, "Some text");

function text2(text, delay) {
  setTimeout(function () {
    console.log(text);
  }, delay);
}
text2("Some text 2", 5000);
