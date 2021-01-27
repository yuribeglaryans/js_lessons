var arr  = [
    ['weak up',8],
    ['eat', 10],
    ["work" ,14],
    ["sleep",24]
];

arr.push(["sports", 18]);
//arr.pop();
console.table(arr);
//console.log(arr[3][1]);
for (let i = 0; i < arr.length; i++) {
    for ( let j=0;j<arr[i].length;j++){
        console.log(arr[i][j])
    }
    
};