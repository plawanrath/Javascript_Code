function isPalindrome(num) {
    //Idea: A number is palindrome if you reverse one half of the number that
    //should be equal to the other half
    //Negative number is never palindrome and if first digit is 0 then the number
    //can be palindrome if the last digit is also 0
    if(num < 0 || (num % 10 == 0 && num != 0)) {
        return false;
    }
    let reverseHalf = 0;
    while(num > reverseHalf) {
        reverseHalf = reverseHalf * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reverseHalf == num || num == Math.floor(reverseHalf/10);
}

console.log(isPalindrome(121));