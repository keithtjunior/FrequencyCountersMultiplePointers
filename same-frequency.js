function createFrequencyCounter(array) {
    let frequencies = new Map();
  
    for (let val of array) {
      let valCount = frequencies.get(val) || 0;
      frequencies.set(val, valCount + 1);
    }
  
    return frequencies;
}

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if(strNum1.length !== strNum2.length) return false;

    let freqNum1 = createFrequencyCounter(strNum1);
    let freqNum2 = createFrequencyCounter(strNum2);

    for([key, val] of freqNum1)
        if(freqNum1.get(key) !== freqNum2.get(key)) return false;

    return true;
}
