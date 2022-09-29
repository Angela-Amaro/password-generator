var generateButton = document.querySelector("#generate");
// variables to be called on to randomize
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[\^_`{|}~"];
var lettersUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var letterLower = ["abcdefghijklmnopqrstuvwxyz"];

//computer to select randomly from each array
var randonum = numbers[Math.floor(Math.random() * numbers.length)];
var randochar = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
var randoletU = lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
var randoletL = letterLower[Math.floor(Math.random() * letterLower.length)];
//generated based on users inputs of wants and dont wants
var genlibrary = []
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

function generatePassword() {
  //var passwordLength = (textLength < 8 || textLength > 129);

  var passwordLength = prompt("How long do you want your password?");
  //if user hits cancel the app concludes with a message to start over
  if (passwordLength == null || passwordLength == "") {
    passwordLength = parseInt(passwordLength);
    alert("Please try again");
    passwordLength = "you have to start over :,(";
    return passwordLength;
  }
  //if they choose a number out of the target range the user recieves a message and has to start over
  else if (parseInt(passwordLength) < 8) {
    alert("Please enter a number higher than 8")
    passwordLength = "enter a number higher than 8 >:("
    return passwordLength;
  }
  else if (parseInt(passwordLength) > 129) {
    alert("Please enter a number lower than 129")
    passwordLength = "enter a number lower than 129 >:("
    return passwordLength;
  }

  //variables will be changed in if statements depending on users choice
  var numtrue = false
  var spechar = false
  var uppcase = false
  var lowcase = false

  //boolean true or false
  //if yes include and go to next question
  if (confirm("Do you want numbers in your password?")) {
    numtrue = true
    genlibrary.push(number);
  }


  if (confirm("Do you want special characters such as @!$%#?")) {
    spechar = true
    genlibrary.push(specialCharacters);
  }

  if (confirm("Do you want uppercase letters?")) {
    uppcase = true
    genlibrary.push(lettersUpper);
  }

  if (confirm("Do you want lowercase letters?")) {
    lowcase = true
    genlibrary.push(letterLower);
  }
  //if said no to all, user is warned that the person has to select at least 1 element
  if ((numtrue == false) && (spechar == false) && (uppcase == false) && (lowcase == false)) {
    alert("Sorry, but you must choose 2 elements to include in your password")
    return "please try again";
  }


  //picks randomly and returns output of new password
  if (numbers & specialCharacters & letterLower & lettersUpper)
    confirm("Here is your new generated password " + randochar + randoletL + randoletU + randonum);

  else if (numbers + specialCharacters + letterLower) {

  }

  else if (numbers + specialCharacters) {

  }

  else if (specialCharacters + letterLower + lettersUpper) {

  }
  else if (specialCharacters + numbers + letterLower) {

  }
  else if (specialCharacters + numbers + lettersUpper) {

  }

}



