function InvertedRightPyramidNum(N){
   for(let i = N ; i > 0 ; i--){
      let str = ""
      for(let j = 1 ; j <= i ; j++){
         str+=j+" "
      }
      console.log(str)
   }

}
let N =  5
InvertedRightPyramidNum(N)