class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hMap = new Map()
        const freq = new Array(nums.length+1).fill().map(()=>[])
        for(const num of nums){
            hMap.set(num,(hMap.get(num) || 0) + 1)
        }
        for(const [num, count] of hMap.entries()){
            freq[count].push(num)
        }
        const result = []
        for(let i=freq.length-1;i>=0;i--){
            result.push(...freq[i])
            if(result.length >= k){
                return result.slice(0,k)
            }
        }
    }
}
