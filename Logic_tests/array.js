const solution = (A) => {
  let result = {};
  for (let i = 0; i < A.length; i++) {

    let key = result[A[i]]

    if (!key) {
      result[A[i]] = 1
    } else {
      result[A[i]] += 1
    }

  }

  return Object.entries(result)
    .filter((value) => value[1] % 2 !== 0)
    .flat()[0]

}