class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hMap = new Map()
        for(let str of strs){
            const count = new Array(26).fill(0)
            for(let c of str){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            const key = count.join(',')
            if(!hMap.has(key)){
                hMap.set(key, [])
            }
            hMap.get(key).push(str)
        }
        return Array.from(hMap.values())
    }
}