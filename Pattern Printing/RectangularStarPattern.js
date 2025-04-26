function rectangularStar(N){
   
   for(let i = 0 ; i < N ; i++){
      let str = "" // use empty string instead of process
      for(let j = 0 ; j < N ; j++){
      //  process.stdout.write("* ") //for same line
      str+="* "


      }
      console.log(str)
   }
   console.log()
}

let N  = 3
rectangularStar(N)