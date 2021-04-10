
let specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let userSelect = [];

  let finalPw = [];

  var length = parseInt(prompt("Enter a number between 8 and 128 to determine the length of your password:"));

  if (length > 128 || length < 8 || length === null || length === "" || !length) {
    alert(length + " is not a valid answer, please try again!");
  }

  else {
    var userPassword = otherQuestions(userSelect, finalPw, length);
    return userPassword;
  }

};

function otherQuestions(userSelect, finalPw, length) {
  let shouldIncludeLower = confirm("Do you want lower case letters in your password?");
  let shouldIncludeUpper = confirm("Do you want upper case letters in your password?");
  let shouldIncludeNumbers = confirm("Do you want numbers in your password?");
  let shouldIncludeSpecialChar = confirm("Do you want special characters in your password?");

  if (shouldIncludeLower) {
    userSelect = userSelect.concat(lowerCasedCharacters);
  }

  if (shouldIncludeUpper) {
    userSelect = userSelect.concat(upperCasedCharacters);
  }

  if (shouldIncludeNumbers) {
    userSelect = userSelect.concat(numericCharacters);
  }
  if (shouldIncludeSpecialChar) {
    userSelect = userSelect.concat(specialCharacters);
  }

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * userSelect.length - 1);
    let temp = userSelect[index];
    finalPw.push(temp);  
  }
  
  return finalPw.join('');

};