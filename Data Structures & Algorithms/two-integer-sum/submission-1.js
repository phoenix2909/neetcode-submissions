class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hMap = new Map()
        let diff = 0
        for(let i in nums){
            diff = target - nums[i]
            if(hMap.has(diff))
                return [Number(hMap.get(diff)), Number(i)]
            hMap.set(nums[i],i)
        }
        return
    }
}
