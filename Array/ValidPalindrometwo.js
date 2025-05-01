function validPalidrome(str) {
  let left = countLeftDeletion(str);
  let right = countRightDeletion(str);
  console.log(left,right);
  let count = Math.min(left,right)
//   return count
if(count <= 1){
   return true
}
else{
   return false
}
  
}

function countLeftDeletion(str) {
  let i = 0;
  let j = str.length - 1;
  let count = 0

  while( i < j){
   if(str[i] !== str[j]){
      i++
      count++
   }
   else{
      i++
      j--
   }
  }
  return count
}
function countRightDeletion(str) {
   let i = 0;
   let j = str.length - 1;
   let count = 0
 
   while( i < j){
    if(str[i] !== str[j]){
       j--
       count++
    }
    else{
       i++
       j--
    }
   }
   return count
}

let str = "aba";
console.log(validPalidrome(str));
