const sumAll = function(first_num, sec_num) {
    if(!Number.isInteger(first_num) || !Number.isInteger(sec_num)){
        return "ERROR";
    }

    if(first_num < 0 || sec_num < 0){
        return "ERROR";
    }
    
    if(first_num > sec_num){
        end = first_num;
        start = sec_num;       
    } 
    if(first_num < sec_num){
        start = first_num;
        end = sec_num;
    }
    

    let sum = 0;
    for(let i = start; i <= end; i ++){
        sum = sum + i;
    }
        
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
