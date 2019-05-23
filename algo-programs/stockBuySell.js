function stockBuySell(arr){
	
	var len = arr.length;
	var profit = 0;
	var minprice = Infinity;
	for(let i=0; i< len; i++){
		profit = Math.max(profit, arr[i] - minprice);
		minprice = Math.min(arr[i], minprice);
	}
	return profit;
}

stockBuySell([100,180,260,310,40,535,695]);




