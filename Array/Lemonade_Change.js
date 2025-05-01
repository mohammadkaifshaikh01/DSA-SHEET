function lemonadeChange(arr) {
  let five = 0;
  let ten = 0;
  let twenty = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      five += 1;
    } else if (arr[i] === 10) {
      if (five >= 1) {
        five--;
        ten++;
      } else {
        return false;
      }
    } else {
      if (five >= 1 && ten >= 1) {
        twenty++;
        five--;
        ten--;
      } else if (five >= 3) {
        five = five - 3;
        twenty++;
      } else {
        return false;
      }
    }
  }
  return true;
}

let arr = [5, 5, 10, 10, 20];
console.log(lemonadeChange(arr));
