const getTheTitles = function(arr) {
    let arr2 = [];
    for(let i in arr){
        arr2.push(arr[i].title);
    }
    return arr2;
};

// Do not edit below this line
module.exports = getTheTitles;
