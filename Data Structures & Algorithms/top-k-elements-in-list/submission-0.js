class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hMap = new Map()
        const freq = new Array(nums.length+1).fill().map(() => [])
        for(const num of nums){
            if(!hMap.has(num)){
                hMap.set(num, 0)
            }
            hMap.set(num,hMap.get(num)+1)
        }
        for(const [num,count] of hMap.entries()){
            freq[count].push(num)
        }
        let result = []
        for(let i=freq.length-1; i>=0; i--){
            result.push(...freq[i])
            if(result.length == k){
                return result.slice(0,k)
            }
        }
    }
}
