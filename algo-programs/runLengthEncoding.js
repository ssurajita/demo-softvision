function runLengthEncoding(str) { 
  var outputString="";
  var count=1;
  for (var i=0; i<str.length; i++) {
    if (str[i]===str[i+1]) {
      count += 1;
    } else {
      outputString += count + str[i];
      count =1;
    }
  }
  return outputString; 
}
   
runLengthEncoding("wwwbbbw");
runLengthEncoding("grrrrhhhttttssrrrryyyyy");
