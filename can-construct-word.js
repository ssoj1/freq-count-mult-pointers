// add whatever parameters you deem necessary & write doc comment

/*
canConstructWord('aa', 'abc')
  // false -- can't build "aa" with only 1 "a"

canConstructWord('abc', 'dcba')
  // true -- can build "abc" with letters "abcd"

canConstructWord('aabbcc', 'bcabcaddff')
  // true -- can build "aabbcc" with those letters


accept two strings, one word and one with letter, return true if you can construct the word from the letters. frequency matters. 

- write a frequency counter function
    - 

- if word is longer that the letter string return false
- set up a variable for a freq counter for the first string // {a:2}
- set up a variable for a freq counter for the second string // {a:1, b:1, c:1}
- if the second variable contains fewer keys than the first, return false

- loop through the first variable and check for a matching key in the second
    - if it doesn't exist, return false
    - if it does, check the value for that key, if it's greater than or equal than the one in the first, return false
- return true
*/

/** accept two strings, one word and one with letters, returns true if you can construct the word from the letters. */

function canConstructWord(word, letters) {
    if ( word.length > letters.length ) {
        return false; 
    }

    let wordFreqCount = createFrequencyCounter(word);
    let lettersFreqCount = createFrequencyCounter(letters);

    if ( lettersFreqCount.size < wordFreqCount.size ) {
        return false;
    }

    for (let key of wordFreqCount.keys() ) {
        if (!lettersFreqCount.has(key)) {
            return false;
        } else if (lettersFreqCount.get(key) < wordFreqCount.get(key) ) {
            return false;
        }
    }
    return true;
}


/** a function to create a simple frequency counter using a map */

function createFrequencyCounter(array) {
    let freqs = new Map();
  
    for (let val of array) {
      let valCount = freqs.get(val) || 0;
      freqs.set(val, valCount + 1);
    }
  
    return freqs;
  }