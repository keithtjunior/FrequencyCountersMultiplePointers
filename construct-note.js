function createFrequencyCounter(array) {
    let frequencies = new Map();
  
    for (let val of array) {
      let valCount = frequencies.get(val) || 0;
      frequencies.set(val, valCount + 1);
    }
  
    return frequencies;
}

// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    let msgFreq = createFrequencyCounter(msg);
    let letFreq = createFrequencyCounter(letters);

    for([key, val] of msgFreq){
        if(!letFreq.get(key) || letFreq.get(key) < val) return false;
    }

    return true;
}
