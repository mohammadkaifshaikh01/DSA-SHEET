var isPalindrome = function(n){
   let copy = n
   let ans = 0
   let i = 0

   while(i < n){
      let ld = n % 10
      ans = (ans * 10) + ld
      n = Math.floor(n/10)
   }
   if(copy === ans){
      return true
   }
   else{
      return false
   }
}



let n = 12121
console.log(isPalindrome(n))