function mergesort(arr){
  if(arr.length == 1){
    return arr;
  }
  
  const middle = Math.floor(arr.length /2);
  const left = arr.slice(0,middle);
  const right = arr.slice(middle);
  
  return merge(mergesort(left),mergesort(right));
}

function merge(left,right){
  result= [];
  leftIndex=0;
  rightIndex=0;
  
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex++;
    }else{
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(mergesort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
