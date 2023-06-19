const square = (num) => {
    return num * num;
  };

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = filter(numbers, square);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
