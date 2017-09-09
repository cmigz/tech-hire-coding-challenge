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

  // Loop an add each index of each array
  for (let i = 0; i < length; i++) {
    for (let i = 0; i < length; i++) {
      // If one arguement is longer then another this will just allow the
      // remainders of the longer arguements array to still be tacked onto
      // the string
      if (aSplit[i] === undefined) {
        aSplit[i] = ''
      } else if (bSplit[i] === undefined) {
        bSplit[i] = ''
      }
    }
    // Taking taking a index from each string and adding them alternativley
    const combine = aSplit[i] + bSplit[i]

    // Pushing resulting combo to empty merged array
    merged.push(combine)
  }

  // returning the result of combos joined into a single string
  return merged.join('')
}

mergeStrings('abc', 'def')
mergeStrings('aaaa', 'bbbb')
mergeStrings('111', '22222')
mergeStrings('66666666', '3333')
