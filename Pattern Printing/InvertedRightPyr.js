function InvertedRightPyramid(N){
for(let i  = N ; i > 0 ; i--){
   let str = ""
   for(let j = 0 ; j < i  ; j++){
      str+="*" + " "
   }
   console.log(str)
}
}


let N = 5
InvertedRightPyramid(N)