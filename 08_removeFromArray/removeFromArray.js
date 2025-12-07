const removeFromArray = function(arr, ...values) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!values.includes(arr[i])) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
};

// Do not edit below this line
module.exports = removeFromArray;
