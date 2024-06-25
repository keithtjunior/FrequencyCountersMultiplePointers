// add whatever parameters you deem necessary
function separatePositive(nums) {
    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    while (leftIdx < rightIdx) {
        if (nums[leftIdx] < 0 && nums[rightIdx] > 0) {
          [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];    
          leftIdx += 1;
          rightIdx -= 1;
        }else{
          if (nums[leftIdx] > 0) leftIdx += 1;
          else rightIdx -= 1;
        }
      }
      return nums;
}
