const arr1 = [2,7,11,15];

/**
 *
 * @param nums
 * @param target
 * @returns {[*,number]}
 * 해당문제는 인덱스값을 구하는 문제다.
 * value 객체 안에는 아래 포맷형태를 띈다.
 * value =
 *     {
 *     "2": 0
 *      }
 *      value 객체 안에 target - nums[i]의 값이 있으면 target - nums[i]값(즉 인덱스)과 현재 인덱스 값이 있어야 한다.
 *      만약 false인 경우는 값과 인덱스 값을 value에 저장한다.
 */

var twoSum = function(nums, target) {
    const value ={};

    for (let i = 0; i<nums.length; i++) {

        if (target - nums[i] in value) {
            console.log(target - nums[i] in value)
            return [value[target - nums[i]],i];
        } else {
            value[nums[i]] = i; // key값으로 "2"와 value 값으로 : 0이 저장된다.


        }
    }
};



console.log(twoSum(arr1, 9));