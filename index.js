function palindrome(num) {
    
    const numStr = num.toString();

    
    const reversedStr = numStr.split('').reverse().join('');
    
    return numStr === reversedStr;
}
module.exports = palindrome;