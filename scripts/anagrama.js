// function anagram(str1,str2)
// {  
//     if(str1.length!=str2.length)
//     {
//         return false;
//     }
//      let arr1=Array.from(str1).sort();//sortirvka
//      let arr2=Array.from(str2).sort();//sortirvka

//         for (let i=0; i<arr1.length; i++)
//         {
//             if(arr1[i]!=arr2[i]){
//                 return false;
//             }
//         }
    
//     return true;    
// }
// console.log(anagram('mard','dram'));
// console.log(anagram("cinema","iceman"));
// console.log(anagram("halo","helo"));



function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const lookup = {};
    for (let i = 0; i < str1.length; ++i) {
      let letters = str1[i];
      
      // if letter exisit increment else set to 1
      lookup[letters] ? (lookup[letters] += 1) : (lookup[letters] = 1);
    }
    for (let i = 0; i < str2.length; ++i) {
      let letters = str2[i];
      if (!lookup[letters]) {
        return false;
      } else {
        lookup[letters] -= 1;
      }
    }
  
    return true;
  }
  
  console.log(validAnagram("abc", "abc"));
  console.log(validAnagram("", ""));
  console.log(validAnagram("abcd", "abc"));
  console.log(validAnagram("aac", "cca"));