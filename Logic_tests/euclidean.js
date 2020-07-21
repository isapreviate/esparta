const eatChocolates = (array, index) => {

  if (array[index] === 0) {
    array[index] = 1
    return true
  } else {
    return false
  }
}

const solution = (N, M) => {
  let number = 0;
  var chocolates = [];
  for (let i = 0; i < N; i++) {
    chocolates.push(number)
  }

  let currentIndex = 0;
  while (eatChocolates(chocolates, currentIndex)) {
    currentIndex += M

    if (currentIndex >= N) {
      currentIndex = currentIndex - N;
    }
  }

  return chocolates.filter(chocolate => chocolate === 1).length

}


