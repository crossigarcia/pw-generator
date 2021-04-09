// Assignment code here
var generatePassword = function() {
  var length = window.prompt("Enter a number between 8 and 128 to determine the length of your password:");

    


  var lowerCase = window.confirm("Do you want lower case letters in your password?");

    if (lowerCase) {

    } else {

    };

  var upperCase = window.confirm("Do you want upper case letters in your password?");
    
    if (upperCase) {

    } else {

    };

  var numbersAndSpecialChar = window.confirm("Do you want numbers and/or special characters in your password?");

    if (numbersAndSpecialChar) {

    } else {

    };

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
