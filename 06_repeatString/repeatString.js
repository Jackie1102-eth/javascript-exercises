const repeatString = function(string,a) {
    let str = ""
    if (a > 0)
    {
    for (i = 0;i < a ; i++)
    {   
         str=str+string;
    }
    return str
    }
    else if (a==0)
    {
        return ""
    }
    {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
