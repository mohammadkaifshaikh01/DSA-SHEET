function rightAngledNumber(n){

for(let i = 1 ; i <= n ; i++){
   let str = ""
   for(let j = 1 ; j <= i ; j++){
      str+=j + " "
   }
   console.log(str)
}
// return str

}

let n = 5
rightAngledNumber(n)