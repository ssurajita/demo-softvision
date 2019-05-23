function smallestSubArrWithSumGreaterThanNum(arr,num){
 let start = -1;
 let end = -1;
 let min = Infinity;
 let subArr = [];
 
  for(let i=0; i<arr.length; i++){
  let currentSum = 0;
    for(let j=i; j<arr.length && (j-i+1); j++){
      currentSum += arr[j];
      if(currentSum == num){
				start = i; end = j; 
				min = end -start +1;
				break;
			}
    }
  }

if(start == -1 || end == -1)  { return 0; }
	while(start <= end) { subArr.push(arr[start]);
	            start++;;
	} 
  
  if(subArr.length >0) return subArr;
}


smallestSubArrWithSumGreaterThanNum([2,3,1,2,4,3],7); //[4,3]
