const leapYears = function(yearnumber) {
    if(yearnumber % 4 == 0 && (yearnumber % 100 != 0 || yearnumber % 400==0))
    {
        return true
    }
    else
    {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
