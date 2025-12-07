const reverseString = function(string) {
    if (string == '')
    {
        return "";1
    }
    else
    {
    let str = ""
    for (i = string.length;i >= 0 ; i--)
    {   
         str=str+string.charAt(i)
    }
    return str
}
};

// Do not edit below this line
module.exports = reverseString;
