// Assignment code here
//declaring variables
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase= "abcdefghijklmnopqurstuvwxyz";
var specialChar= "!@#$%^&*()?><+";
var passwordChar= "";

// Get references to the #generate element
// selecting generate button and assigning it a variable
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var result="";
   var length=  window.prompt ("How many characters, from 8 to 128, would you like your password to contain? ");
   if (length<8) {
       window.alert ("password length cannot be less than 8 characters");
       writePassword();
       return"";
    }
   else if (length>128){
       window.alert ("password length cannot be more than 128 characters");
       writePassword();
       return"";   
    }
    
    console.log (length);

   var upper= window.confirm ("Would you like your password to contain upper case letters?");
    if (upper){
        passwordChar+=upperCase;
        console.log (upper);
    }
   var lower= window.confirm ("Would you like your password to contain lower case letters?");
    if (lower){
        passwordChar+=lowerCase;
        console.log (lower);
    }
  var special= window.confirm ("Would you like your password to contain special characterrs?");
    if (special){
        passwordChar+=specialChar;
        console.log (special);
    }   

    
    for(var i=0; i<length.length; i++){
        result+=passwordChar.charAt(Math.floor(Math.Random()*passwordChar.length));
    return result;
    }
}
  var password = writePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);