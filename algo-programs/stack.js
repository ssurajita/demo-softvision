function stack(){
  this.items = [];
  this.push = function(ele){
    this.items.push(ele);
  }
  this.pop = function(){
    return this.items.pop();
  }
  this.peek = function(){
    return this.items[this.items.length - 1];
  }
  this.isEmpty = function(){
    return this.items.length === 0;
  }
  this.printStack = function(){
  var str ="";
    for(var i=0; i < this.items.length; i++){
      str += this.items[i] + " ";
    }
    return str;
  }
}


var s = new stack();
s.push(2);
