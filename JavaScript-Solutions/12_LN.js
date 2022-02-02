/**
 * @author yetty
 * @since 16.01.2022
 */

function twoSum(arr1, arr2) {
    var num1 = arr1.join('');
    var num2 = arr2.join('');

    return Number(num1) + Number(num2);
}

function luckyNumber(number) {
    //if number is 0 or negative, throw error.
    if(number < 0) throw new Error("Number must be a positive integer.");
    else { //if not;
        var isLucky = String(number); //String the number given.
        var checkLucky = "";

        for(let i = isLucky.length - 1; i >= 0; i--) {
            checkLucky += isLucky.charAt(i);   
        }//reverse the string

        if(isLucky.localeCompare(checkLucky) == 0) { //if both strings are equal, palindrome.
            return true;
        }
        else return false;
    }
}

function errorMessage(input) {
    var isNum = Number(input);
    if(input == '' || input == null || input == undefined) return 'Required field';
    else if(isNaN(isNum) || isNum <= 0) return 'Must be a number besides 0';
    else return ''; 
    
}

//Testing
console.log(errorMessage('some text'));
console.log(errorMessage('86f1'));
console.log(errorMessage('4 2'));