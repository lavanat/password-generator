// Assignment code here:

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","]","\\"];

var generatePassword = function () {
  var passwordType = [];
  var createPass = "";
  // Figure out what characters the password should include and create an array with the specifications
  var useLower = confirm("Should the password include lowercase letters?");
  if (useLower === true) {
    passwordType.push ("lower");
  }
  var useUpper = confirm("Should the password include uppercase letters?");
  if (useUpper === true) {
    passwordType.push ("upper");
  }
  var useNum = confirm("Should the password include numbers?");
  if (useNum === true) {
    passwordType.push ("num");
  }
  var useSpecialChar = confirm("Should the password include special characters?");
  if (useSpecialChar === true) {
    passwordType.push ("special");
  }
  // Make sure there is at least one type of character chosen.
  if (passwordType.length == 0) {
    alert("You did not choose any character types.")
  } else {
    // Make sure the password length is valid
    var passwordLength = Number(prompt("Enter a number between 8 and 128 for the length of your password."));
    if (!(passwordLength >= 8 && passwordLength <= 128)) {
      alert("You did not choose a valid password length.");
    } else {
      // from the type of characters chosen by the  user, choose a random type for every character for the length of the password
      for (let i=0; i<passwordLength; i++) {
        let pickType= Math.floor(Math.random()*passwordType.length);
        // Choose a random letter/number/special character 
        if (passwordType[pickType]=== "lower") {
          random = Math.floor(Math.random()*letters.length);
          createPass = createPass + letters[random];
        } else if (passwordType[pickType]=== "upper") {
          random = Math.floor(Math.random()*letters.length);
          createPass = createPass + letters[random].toUpperCase();
        } else if (passwordType[pickType]=== "num") {
          random = Math.floor(Math.random()*10);
          createPass = createPass + random;
        } else {
          random = Math.floor(Math.random()*specialChar.length);
          createPass = createPass + specialChar[random];
        }
      }
    }
  }
  return createPass;
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
