class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map()
        if(s.length !== t.length)
            return false
        for(let str of s){
            sMap.set(str, (sMap.get(str) || 0) + 1)
        }
        for(let str of t){
            if(!sMap.has(str) || sMap.get(str) === 0)
                return false
            sMap.set(str, sMap.get(str)-1)
        }
        return true
    }
}
