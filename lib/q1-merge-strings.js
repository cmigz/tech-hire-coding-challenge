const mergeStrings = function (a, b) {
  // Empty array to fill with combo
  const merged = []

  // Splitting strings down to each letter in a array for ea
  const aSplit = a.split('')
  const bSplit = b.split('')

  // Defining length based on which arguement is longer
  let length
  if (aSplit.length > bSplit.length) {
    length = aSplit.length
  } else if (bSplit.length > aSplit.length) {
    length = bSplit.length
  } else {
    length = aSplit.length
  }
  console.log(length)

  // Loop an add each index of each array
  for (let i = 0; i < length; i++) {
    const combine = aSplit[i] + bSplit[i]
    merged.push(combine)
  }
  a = merged.join('')
  return a
}

mergeStrings('abc', 'def')
