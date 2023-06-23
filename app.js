function Fizzbuzz () {
  let result = [];
  for (let i=1; i <=100; i++) {
    if (i%3 === 0 and i%5 === 0){
      result.push('FizzBuzz');
    }
    else if (i%3 === 0){
      result.insert('Fizz');
    }
    else if (i%5 === 0){
      result.push('Buzz');
    }
    else {
      result.push(i);
    }
  }
  return result
}