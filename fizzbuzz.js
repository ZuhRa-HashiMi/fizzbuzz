module.exports = function () {
  let ArrayX =  [];
  for (let i = 1; i <= 100; i++){
    if ((i % 5) === 0 && (i % 3) === 0){
      ArrayX.push("FizzBuzz");
    }
  
    else if (i % 5 === 0) {
      ArrayX.push("Buzz");
    }
    else if(i % 3 === 0) {
      ArrayX.push("Fizz");
    }
  
  else {
    ArrayX.push(i);
    }
  }
 return (ArrayX);
}
