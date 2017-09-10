const countHoles = function (num) {
   const numSplit = num.toString().split('')
   console.log(numSplit)
   let count = 0
   for (let i = 0; i < numSplit.length; i++) {
     if (numSplit[i] === '1' || '2' || '3' || '7' || '5') {
       console.log(count)
       console.log('numSplit[i] = ' + numSplit[i])
       console.log('Count = ' + count)
     } else if (numSplit[i] === '0' || '4' || '6' || '9') {
       count = count + 1
     } else if (numSplit[i] === 8) {
       count = count + 1
     }
   }
return 'Num has ' + count + ' holes.'
}

countHoles(20)
