function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER

  let ans = []

  for(let i = 0; i < nums.length; i++){
    if(nums [i] < min){
        ans[0] = nums[i]
        min = nums[i]
    }
    if(nums[i] > max){
        ans[1] = nums[i]
        max = nums[i]
    }
  }

  return (ans[0] + ans[1])

}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;