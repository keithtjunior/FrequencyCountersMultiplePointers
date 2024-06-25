// add whatever parameters you deem necessary
function countPairs(arr, num) {
    let count = 0;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    arr.sort((x, y) => x - y);

    while(leftIdx < rightIdx){
        let sum = arr[leftIdx] + arr[rightIdx];
        if(sum === num){
            count++;
            leftIdx++;
            rightIdx--;
        } else if(sum < num){
            leftIdx++;
        } else {
            rightIdx--;
        }
    }
    return count;
}
