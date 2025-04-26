function validAnagram(a, b) {
  //here first we ara taking two empty object for storing frequency of string a = 3 , n = 1 etc..
  let obj = {};
  let obj2 = {};

  if (a.length !== b.length) {
    return false;
  }

  let n = a.length; //finding length of string in n

  for (let i = 0; i < n; i++) {
    //run loop in n 0 to n
    if (obj[a[i]]) {
      //checking if obj is not empty
      obj[a[i]] = obj[a[i]] + 1; // increment frequecy by 1
    } else {
      // otherwise
      obj[a[i]] = 1; // value should be 1
    }
    if (obj2[b[i]]) {
      // same for second string strong data in key value pair in obj 2
      obj2[b[i]] = obj2[b[i]] + 1;
    } else {
      obj2[b[i]] = 1;
    }
  }
  // console.log(obj)
  // console.log(obj2)

  for (let i in obj) {
    //running loop in obj key
    // console.log(obj[i])
    if (obj[i] !== obj2[i]) {
      // checking obj1 value is not equals to  obj2 value a :3 == a:3
      return false;
    }
  }
  return true;
}

let a = "anagram";
let b = "nagaram";
console.log(validAnagram(a, b));
