const palindromes = function (str) {
    const strinCopy = str.toLowerCase().replace(/[^a-z]/g, "");
    return strinCopy.split("").reverse().join("") === strinCopy;


};

// Do not edit below this line
module.exports = palindromes;
