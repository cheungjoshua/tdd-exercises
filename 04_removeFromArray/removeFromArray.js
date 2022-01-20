const removeFromArray = function(...args) {
    let list = args[0];

    
    let myArray = list.filter(item => !args.includes(item));
    return myArray
};

// Do not edit below this line
module.exports = removeFromArray; 
