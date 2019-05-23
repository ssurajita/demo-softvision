
function queue(){
  this.items = [];
  this.enqueue = function(ele){
    this.items.push(ele);
  }
  this.dequeue = function(){
    if(this.items.length!= 0)
    return this.items.shift();
  }
  this.front = function(){
    return this.items[0];
  }
  this.isEmpty = function(){
    return this.items.length === 0;
  }
  this.printQueue = function(){
  var str ="";
    for(var i=0; i < this.items.length; i++){
      str += this.items[i] + " ";
    }
    return str;
  }
}


var q = new queue();
q.enqueue(2);
