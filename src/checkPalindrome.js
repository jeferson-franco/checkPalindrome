function solution(inputString) {
    return inputString === inputString.split('').reverse().join('');
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test checkPalindrome
