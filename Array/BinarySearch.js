function binarySearch(nums,target){
let left = 0
let right =  nums.length-1

   while(left <= right){
      let mid = Math.floor((left+right) / 2)
      if(nums[mid] == target){
         return mid
      }
      else if (nums[mid] < target){
         left++
      }
      else{
         right--
      }
   }
   return -1
}



let nums = [-1,0,3,5,9,12]
let target = 11

console.log(binarySearch(nums,target))