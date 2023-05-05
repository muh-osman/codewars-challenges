// Correct the mistakes of the character recognition software

// Character recognition software is widely used to digitise printed texts.
// Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter),
// are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Method 1
function correct(string) {
  const characters = {
    0: "O",
    1: "I",
    5: "S",
  };
  return string.replace(/[501]/g, (character) => characters[character]);
}
console.log(correct("PAR15"));





// Method 2
const corr = (str) =>
  str.replace(5, "S").replace(1, "I").replace(0, "O").replace(5, "S");

console.log(corr("PAR15"));





// Method 3
const corr2 = (str) =>
  str
    .split("")
    .map((letter) =>
      letter.replace(
        /[0-1-5]/g,
        letter == "0" ? "O" : letter == "1" ? "I" : "S"
      )
    )
    .join("");

console.log(corr2("PAR15 015"));





// Method 4
const corr3 = str =>
  str.replace(/[015]/g, num => num == 0 ? "O" : num == 1 ? "I" : "S")

console.log(corr3("PAR15 015"));
