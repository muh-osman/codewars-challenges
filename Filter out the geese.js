// Filter out the geese

// Write a function that takes a list of strings as an argument
//  and returns a filtered list containing the same elements but with the 'geese' removed.


// Method 1
function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    let uniqueResults = birds.filter((bird) => {
        return !geese.includes(bird);
    });
    return uniqueResults;
};
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))



// Method 2 (Short)
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

const filterArr = (birdsArr) => birdsArr.filter( (bird) => !geese.includes(bird) )


console.log(filterArr(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
