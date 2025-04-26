function rectangularStar(N){
   
   for(let i = 0 ; i < N ; i++){
      for(let j = 0 ; j < N ; j++){
       process.stdout.write("* ")
      }
      console.log()
   }
}

let N  = 5
rectangularStar(N)