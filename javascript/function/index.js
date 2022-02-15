

function getSenseOfLife() {
  return 42;
}

const res = getSenseOfLife()
console.log(res);

console.log(getSenseOfLife());

function getSquared(num) {
    console.log(num * num);
}

 

// console.log(getSquared(4));
// const res1 = getSquared(-8);
// console.log(res1);

function getSquared(num) {
  // console.log(num * num);

  if (num < 0) {
    return num * num;
  } else {
    return num;
  }
}

console.log(getSquared(4));
const res1 = getSquared(-8);
console.log(res1);

function sum(firstNum, secondNum) {
  console.log(firstNum);
  console.log(secondNum);
  return firstNum + secondNum;
}

console.log(sum(12, 2));
console.log(sum(23));

const first = 4;
const second = 7;

console.log(sum(first, second));

function print(age) {
  console.log('I am ' + age + ' years old');
  
}

print(34);

// function sendEmail(userID) {
//   const email = getEmailById(userID);
//   sendEmail();
// }


let mult = (firstNum, secondNum) => {
    return firstNum + secondNum;
};


let mult = (firstNum, secondNum) => firstNum * secondNum;

console.log(mult(3, 2));

const squareArrow = num => num * num;

console.log(squareArrow(3));


let getMagicNumber = () => 17;
console.log(getMagicNumber);