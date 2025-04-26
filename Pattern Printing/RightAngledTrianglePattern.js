function rectangularStar(N){
   
   for(let i = 0 ; i < N ; i++){
      let str = "" // use empty string instead of process
      for(let j = 0 ; j <= i ; j++){
      //  process.stdout.write("* ") //for same line
      str+="* "


      }
      console.log(str)
   }

   
for(let i = 1 ; i <= N ; i++){
   let str = "" // use empty string instead of process
   for(let j = 1 ; j <= i ; j++){
   //  process.stdout.write("* ") //for same line
   str+=j + " "


   }
   console.log(str)
}
}







// number


let N  = 5
rectangularStar(N)