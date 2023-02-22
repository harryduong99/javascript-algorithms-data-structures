function arrayOfProducts(array) {
  // Write your code here.
  let product = 1;
  let result = [];
  let isZeroExist = false;
  let moreThanOneZero = false;
  console.log('asdf')
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      moreThanOneZero = isZeroExist ? true : false
      isZeroExist = true;
    } else {
      product *= array[i];
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (moreThanOneZero) {
      result.push(0);
      continue;
    }
    if (isZeroExist && array[j] === 0) {
      result.push(product);
      continue;
    } else if (isZeroExist && array[j] !== 0) {
      result.push(0);
      continue;
    }

    if (!isZeroExist) {
      result.push(product/array[j]);
      continue;
    }
  }
  return result;
}


console.log(arrayOfProducts([5,1,4,2]))