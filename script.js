// Assignment code here
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]","^", "_" , "`", "{", "|", "}", "~"];

function generatePassword () {
  var length = window.prompt("How many characters would you like your password to be? Please type a number from 8-128.");
  console.log('length', length);

  if (length <= 7 || length >= 128) {
    window.alert("Please type out a number from 8-128. Thank you.");
    generatePassword();
  } 
  else {
  var useLower = window.confirm("Do you want lowercase letters in your password?");
  var useUpper = window.confirm("Do you want uppercase letters in your password? ");
  var useNumeric =  window.confirm("Do you want numbers in your password?");
  var useSpecial = window.confirm("Do you want special characters in your password?");


  var choices = [];
  var password = [];

  if (useLower) {
  choices = choices.concat(lower)
  console.log("you selected lower")
  }
  if (useUpper){
  choices = choices.concat(upper)
    console.log("you selected upper")
  }
  if(useNumeric){
  choices = choices.concat(numeric)
    console.log("you selected numeric")
  }
  if(useSpecial){
  choices = choices.concat(special)
    console.log("you selected special")
  }

    var pwd ='';
    for(i = 0; i < length; i++) {
      const random = choices[Math.floor(Math.random() * choices.length)];
      pwd += random
  }
  return pwd;
  }

  if (useLower == false && useUpper == false && useNumeric == false && useSpecial == false) {
    window.alert("You must select either lowercase, uppercase, number or special character.");
  generatePassword();
  }
}


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
