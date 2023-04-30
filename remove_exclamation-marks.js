// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// Method 1
function removeExclamationMarks(s) {
    return s.replace(/[!]/g, "");
}
console.log(removeExclamationMarks('H!ell!o!! Wo!rld! F!ro!m F!il!e!!'));






// Method 2
const remove = str => str.split("").filter(el => el != "!").join("")

console.log(remove("H!ell!o!! Wo!rld! F!ro!m F!il!e!!"))
