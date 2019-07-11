function solution (str){
    let result = []
        function permute(str, current = ''){
            let length = str.length
            let strArr = str.split('')

            if (length == 0){
        result.push(current)
            }else { 
                for (let i = 0; i < string; i++){
            let left= strArr.slice(0,i).join('')
            let right = strArr.slice(0, i).join('')
            permute(left + right, current + strArr[i])

            permute(str)
            return result

        }
        
console.assert(solution('a').join(''))
    

}

// let startTime = new Date().getTime()

// let finishTime = new Date.getTime()

// let performance = (finishTime - startTime) / 1000

// console.log(`${ result.length'} permutations were created in ${ performance}`)
