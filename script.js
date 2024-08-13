const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const wordCount = document.querySelector(".word-count");
let arr = [];


button.addEventListener("click", () => {
  let textareaValue = textarea.value.trim();

  if (textareaValue) {
    arr = textareaValue.split("");

    let filteredArray = arr.filter((item) => {
      return (
        item == "a" || item == "e" || item == "u" || item == "o" || item == "i"
      );
    });

    wordCount.innerHTML = `number of vowel sound in ${textareaValue} is ${filteredArray.length}`
  }
});
