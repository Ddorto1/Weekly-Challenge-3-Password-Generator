// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    window.prompt ("How many characters, from 8 to 128, would you like your password to contain? ");
    window.confirm ("Would you like your password to contain upper case letters?");
    window.confirm ("Would you like your password to contain lower case letters?");
    window.confirm ("Would you like your password to contain special characterrs?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);