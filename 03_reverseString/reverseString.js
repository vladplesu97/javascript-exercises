const reverseString = function(str) {
    let str2 = '';

    for(let i = str.length - 1 ; i >= 0 ; i--){
        str2 = str2 + str[i];
    }

    return str2;
};

// Do not edit below this line
module.exports = reverseString;
