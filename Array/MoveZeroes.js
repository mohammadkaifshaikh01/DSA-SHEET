function MoveZero(arr){

   let l  = 0
   for(let r = 0 ; r < arr.length ;r++){
      if(arr[r] !== 0){
         let temp = arr[r]
         arr[r] = arr[l]
         arr[l] = temp
         l++
      }
   }
   return arr

}


let arr = [0,1,0,3,12,5,6,5]
console.log(MoveZero(arr))