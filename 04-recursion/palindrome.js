function checkPalindrom(str,start,end){
    // Setting up base case
    if(start == end || start>end){
        return true;
    }
    console.log(str[start], "vs", str[end])
    // Setting up processing and recursive
    return(str[start] == str[end] && checkPalindrom(str, start+1,end-1))
}

function checkV2(str){
    if (str.length == 0 || str.length == 1){
        return true;
    }
    console.log(str)
    return(str[0] == str[str.length-1] && checkV2(str.slice(1, str.length-1)))
}


let str = "saippuakivikauppias"
console.log(checkPalindrom(str,0,str.length-1))
console.log(checkV2(str))