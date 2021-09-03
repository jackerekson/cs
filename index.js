console.log('this should return false then false then true')

let arr = [1]
let arr2 = [1,2,3]
let arr3 = [1,2,3,-2]

const sumZero = (arr) => {
    let equalZero = false
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if (arr[i] + arr[j] === 0)
            equalZero = true
        } 
    }
    console.log(equalZero)
}

sumZero(arr)
sumZero(arr2)
sumZero(arr3)

// the time complexity of this array is going to be O(n^2)
// the space complexity of this array is going to be O(n)

console.log('this should return true then false')

const uniqueCharacters = (str) => {
    let obj = {}
    for(let i=0;i<str.length;i++){
        let char = str[i]
        if(obj[char]) return false
        obj[char] = true
    }
    return true
}

console.log(uniqueCharacters('monday'))
console.log(uniqueCharacters('moonday'))

// the time complexity of this array is going to be O(n) we could make it O(n^2) if we added a nested for loop in it to look at every character for every letter like the on before but this function is much quicker than the first one
// i belive the space complexity of this is going to be O(n^2) as the longer the string is the more space is taken up inside the obj variable.

console.log('this should return true then false')

const pangram = (str) => {
    let yesPangram = true
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = str.toLowerCase().replace(/\s/g, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(newStr.indexOf(alphabet[i]) === -1){
       yesPangram = false;
     }
    }
   console.log(yesPangram)
 }


pangram("The quick brown fox jumps over the lazy dog!")
pangram("I like cats, but not mice")

// the time complexity of this function is O(n)
// the space complexity of this function is O(n)


console.log('this should return the length of the longest word')

let wordArr = ['hi','hello','howdydo','aloha','thisIsTheLongestWord']

const longestWord = (arr) => {
    let longest = ''
    for(let i=0;i<arr.length;i++)
    arr.forEach(char => {
        if(char >= arr[i]){
            longest = char
        }
    })
    console.log(longest.length)
}

longestWord(wordArr)

// this function's time complexity is going to be O(n)
// the space complexity of this function is also O(n)