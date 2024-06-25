// add whatever parameters you deem necessary
function averagePair(integers, average) {
    let leftIdx = 0;
    let rightIdx = integers.length - 1;

    while(leftIdx < rightIdx){
        let currAverage = (integers[leftIdx] + integers[rightIdx]) / 2;
        if(currAverage === average) return true;
        else if (currAverage < average) leftIdx++;
        else rightIdx--;
    }
    return false;
}
