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
   var passwordLength=  window.prompt ("How many characters, from 8 to 128, would you like your password to contain? ");
   if (passwordLength<8) {
       window.alert ("password length cannot be less than 8 characters");
       writePassword();
       return"";
    }
   else if (passwordLength>128){
       window.alert ("password length cannot be more than 128 characters");
       writePassword();
       return"";   
    }
    
    console.log (passwordLength);
//password criteria
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
    //for loop to randomize password
    for(var i=0; i<passwordLength; i++){
       result+=Math.floor(Math.random()*passwordLength.length);
   console.log (result);
    }
//write the password to the screen
  var password = result;
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = password;
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);