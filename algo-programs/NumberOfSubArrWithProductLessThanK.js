function countSubArray(arr,len,k){
  let count =0;
  let mul;
  
      for (var i = 0; i < len; i++) { 
        if (arr[i] <= k) { count++; }
        mul = arr[i]; 
        for (var j = i + 1; j < len; j++){
           mul = mul * arr[j];  
           if (mul <= k)  
              count++;  
           else
              break;  
         } 
      } 
        return count; 
}

countSubArray([1,2,3,4],4,10)
