function rightAngledTriangle2(N){
   
      // your code here
      for(let i = 1 ; i <= N ; i++ ){
          let str = ""
          for(let j = 1 ; j <= i ; j++){
              str+=i+" "
          }
          console.log(str)
      }
  }



let N = 5
rightAngledTriangle2(N)