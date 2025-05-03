/*
Tom is a string freak. He has got sequences of words arr[] to manipulate. If in a sequence, two same words come together then Tom destroys each other. Find the number of words left in the sequence after this pairwise destruction. 

Input: arr[] = ["ab", "aa", "aa", "bcd", "ab"]
Output: 3
Explanation: After the first iteration, we'll have: ab bcd ab. We can't further destroy more strings and hence we stop and the result is 3. 
*/


function removeConsecutiveSame(arr){

    let res = [];
    for(let s of arr){
        if(res.length==0){
            res.push(s);
        }else if(res[res.length-1]!=s){
            res.push(s)
        }else{
            res.pop()
        }
    }
    return res.length;



}

let arr =  ["ab", "aa", "aa", "bcd", "ab"];
console.log(removeConsecutiveSame(arr))