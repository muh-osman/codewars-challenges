// When provided with a letter, return its position in the alphabet.

// 1- Create a String with the Alphapet
// 2- Loop through this String
// 3- Check if the Loopring CHaracter equal the Provided Letter
// 4- Return the Position



function position(letter){
    const alphpet = 'abcdefghijklmnopqrstuvwxyz';
    // for(let i =0; i<alphpet.length; i++){
    //     if(alphpet[i] === letter){
    //         return `Position of alphabet: ${i + 1}`;
    //     }
    // }
    return `Position of alphabet: ${alphpet.indexOf(letter) + 1}`;
}
console.log(position('c'));





// Method 2
let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const pos = (letter) => {

    // let i = arr.findIndex((el) => el === letter.toLowerCase()) //Or
    let i = arr.indexOf(letter.toLowerCase())

    return `Position of alphabet: ${i + 1}`
}

console.log(pos('F')) // 6
