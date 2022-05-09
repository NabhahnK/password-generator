// Assignment Code
var generateBtn = document.querySelector("#generate");
//Three arrays with all possible characters
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChr = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "\"", "\'"]

function generatePassword() {
  // Gets user input to select character type
  alert("Hello! We're gonna generate a password for you!");
  var lCCheck = confirm("Do you want lowercase characters?");
  var uCCheck = confirm("Do you want uppercase characters?");
  var sCCheck = confirm("Do you want special characters?");
  // Generates an empty array and variable
  var tempPassword = new Array();
  var characterIndex

  // Checks which characters the user chose and creates one arry
  if (lCCheck && uCCheck && sCCheck) {
    var characterToUse = lowerCase.concat(upperCase).concat(specialChr);
  } else if (lCCheck && uCCheck) {
    var characterToUse = lowerCase.concat(upperCase);
  } else if (uCCheck && sCCheck) {
    var characterToUse = upperCase.concat(specialChr);
  } else if (sCCheck && lCCheck) {
    var characterToUse = specialChr.concat(lowerCase);
  } else if (lCCheck) {
    var characterToUse = lowerCase;
  } else if (uCCheck) {
    var characterToUse = upperCase;
  } else if (sCCheck) {
    var characterToUse = specialChr;
  } else {
    alert("You need to choose at least one type of characters.");
    return;
  }

  //user choose password length
  var length = parseInt(prompt("How long do you want it between 8 and 128 characters?", "1"), 10);

  // Breaks funcion if length is invalid
  if (length < 8 || length > 128) {
    alert("You have to choose a number of at least 8 characters and at most 128.");
    return
  }

  //Creates password out of final array
  for (var i = 0; i < length; i++) {
    characterIndex = Math.floor(Math.random() * (characterToUse.length));
    tempPassword.push(characterToUse[characterIndex]);
  }

  //Sends password as value
  var realPassword = tempPassword.join("");
  return realPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
