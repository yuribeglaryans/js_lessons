var arr = [
    ["Wake up", 8],
    ["Eat", 10],
    ["Work", 12],
    ["Lunch", 14],
    ["Sleep", 22],
  ];
  
  arr.push(["homwork", 13]);
  arr.pop();
  arr.splice(1, 0, ["Programmmin lesson", 19]);
  console.table(arr);
  //console.log(arr[4][0]);
  
  for (var i = 0; i < arr.length; ++i) {
    //console.log(arr[i]);
    var innerArraylength = arr[i].length;
    for (var j = 0; j < innerArraylength; ++j) {
      console.log("[" + i + "," + j + "] = " + arr[i][j]);
    }
  }