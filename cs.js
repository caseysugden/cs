// O(n^2) because as the array gets longer, each for loop takes longer to run
function addToZero(numberss) {
    for (let i = 0; i < numberss.length; i++) {
        for (let j = 0; j < numberss.length; j++) {
            if (numberss[i] + numberss[j] === 0) {
                return true;
            };
        };
    };
    return false;
};

// O(n^2) because as the string gets longer, each for loop takes longer to run
function hasUniqueChars(word) {
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word.charAt(i) === word.charAt(j)) {
                return false;
            };
        };
    };
    return true;
};

// O(n) because new Set iterates over every element of the array
function isPangram(sentence) {
    let pangram = new Set(sentence.split(''));
    return (pangram.size === sentence.length);
};

// O(n) because the mroe words passed to the function, the more times the loop will iterate
function findLongestWord(words) {
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        };
    };
    return longestWord.length;
};