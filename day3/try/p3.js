// Write a function to check if a string is a palindrome.
function isPalindrome(str) {
    let reversed=str.split('').reverse().join('');
    return str===reversed;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello"));
