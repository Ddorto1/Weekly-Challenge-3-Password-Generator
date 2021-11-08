// Assignment code here
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase= "abcdefghijklmnopqurstuvwxyz";
var specialChar= "!@#$%^&*()?><+";
var passwordChar= "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   var length=  window.prompt ("How many characters, from 8 to 128, would you like your password to contain? ");
   console.log (length);
   if (length<8) {
       window.alert ("password length cannot be less than 8 characters");
       return"";
    }
   else if (length>128){
       window.alert ("password length cannot be more than 128 characters");
       return"";   
    }
// else (length==null||length=="")
//     window.alert ("Please enter a valid response!!");
//     return"";
   var upper= window.confirm ("Would you like your password to contain upper case letters?");
    console.log (upper);
    if (upper){
        upperCase+=passwordChar;
        console.log (upper);
    }
   var lower= window.confirm ("Would you like your password to contain lower case letters?");
    console.log (lower);
    if (lower){
        lowerCase+=passwordChar;
        console.log (lower);
    }
  var special= window.confirm ("Would you like your password to contain special characterrs?");
    console.log (special);
    if (special){
        specialChar+=passwordChar;
    }   
   var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);