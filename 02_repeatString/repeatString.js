const repeatString = function(string, num) 
{
    let line = '';
    if(num < 0) 
    {
        return "ERROR";
    } 
    else if(num == 0 && string == '') 
    {
        return line;
    } 
    else 
    {
        for(let i = 0; i < num; i++) {
            line += string;
        }
    }
    return line;
};


// Do not edit below this line
module.exports = repeatString;
