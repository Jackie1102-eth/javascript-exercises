const sumAll = function(a,b) {
    if(a>0 && b>0 && typeof a == "number" && typeof b == "number"&&Number.isInteger(a) && Number.isInteger(b) )
    {
        if(a>b)
            {
                let temp=a
                a=b
                b=temp
                let sum=0
                for (let i = a; i <= b; i++) {
                sum=sum+i
                }
                return sum;
                }
        else
            {
                let sum=0
                for (let i = a; i <= b; i++) {
                sum=sum+i
                }
                return sum;
                }
                }
    else
        {
            return "ERROR"
        }
};

// Do not edit below this line
module.exports = sumAll;
