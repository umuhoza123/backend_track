const filter = (array, callback) => {
    const filteredArray = [];
    
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        filteredArray.push(array[i]);
      }
    }
    
    return filteredArray;
  };



  const numbers = [1, 2, 3, 4, 5];

const isEven = (num) => {
  return num % 2 === 0;
};

const evenNumbers = filter(numbers, isEven);
console.log(evenNumbers);