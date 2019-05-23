function maximumHeightOfStairCase(totalBlocks){
    var steps = (-1 + Math.sqrt(1 + 4*1*2*totalBlocks)) / 2;
    if(Number.isInteger(steps)){ return steps; } else{ return 'add more blocks to create steps'; }
}
