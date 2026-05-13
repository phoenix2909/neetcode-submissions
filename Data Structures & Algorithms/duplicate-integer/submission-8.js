class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashset = new Set()
        for(let num of nums){
            if(hashset.has(num)){
                return true
            }
            hashset.add(num)
        }
        return false
    }
}
