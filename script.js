var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
var characterArr = ["~", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", ";", ":", "'", "?", "<", ">", ",", ".", "/"];
var passwordLength = [];
var choiceArr =[]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function getPrompt(){
  characterLength = parseInt(prompt("How many characters would you like your password to be? It must be between 8 and 128 characters."));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
    alert("Your password must be between 8 and 128 characters long. Try again.");
  }

  if(){
    
  }
}