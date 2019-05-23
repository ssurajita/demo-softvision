function max(a,b){ return (a > b)? a: b; }

function eggDrop(e,f){
  //e eggs , f floors
  
  if(f == 1 || f == 0){ return f;}
  if(e==1){ return f; }
  
  var min = Infinity;
  var x,res;
  
  for(x=1;x<=f;x++){
    res = max(eggDrop(e-1,x-1),eggDrop(e,f-x));
    if(res<min)min=res;
  }
  return min+1;
}


eggDrop(2,10);
