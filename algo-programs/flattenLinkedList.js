/** Flatten a linked list **/
var flattenArray = [];
function flattenLinkedList(arr){
  for(var i=0; i<arr.length; i++){
      if(arr[i] instanceof(Array)){
        flattenLinkedList(arr[i]);
      }else{
        flattenArray.push(arr[i]);
      }
  }
  return flattenArray;
}

var arr = [1,2,3,[4,5],[7,6],6,[8,[9,1,[2,3],2],4],5]
flattenLinkedList(arr);
//output -  4, 5, 7, 6, 6, 8, 9, 1, 2, 3, 2, 4, 5]
