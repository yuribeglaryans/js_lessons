function anagram(str1,str2)
{  
    if(str1.length!=str2.length)
    {
        return false;
    }
     let arr1=Array.from(str1).sort();//sortirvka
     let arr2=Array.from(str1).sort();//sortirvka

        for (let i=0; i<arr1.length; i++)
        {
            if(arr1[i]!=arr2[i]){
                return false;
            }
        }
    
    return true;    
}
console.log(anagram('mard','dram'));
console.log(anagram("cinema","iceman"));
console.log(anagram("hello","helo"));