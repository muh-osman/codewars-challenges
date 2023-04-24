// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Initial value of zero
// Loop through the array
// Check if the sheep === True , increase the Intial Value + 1

const sheeps = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];


let count = 0;

const countSheeps = () => {
  sheeps.map((sheep) => (sheep === true ? count++ : null));
  return count;
};

console.log(countSheeps());
