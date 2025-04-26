function rectangularStar(N){
   
   for(let i = 0 ; i < N ; i++){
      let str = "" // use empty string instead of process
      for(let j = 0 ; j <= i ; j++){
      //  process.stdout.write("* ") //for same line
      str+="* "


      }
      console.log(str)
   }
}

let N  = 5
rectangularStar(N)