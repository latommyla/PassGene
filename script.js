// Assignment Code
var enter;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confirmSymbols;

upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", ">", "<", "?", "/"];

var options;
var enter;

// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});


function generatePassword(){
  enter = parseInt(prompt("How many characters? Choose between 8 and 128"));
  if (!enter) {
    alert("Choose how many characters!");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Please choose between 8 and 128"));

  } else {
    confirmUpperCase = confirm("Uppcase letters?")
    confirmLowerCase = confirm("Lowercase letters?")
    confirmNumbers = confirm("Numbers?")
    confirmSymbols = confirm("Symbols?")
  };

  if (!upperCase && !lowerCase && !numbers && !symbols) {
    options = alert("You must choose!");

    // Selected all 4 options for password
  } else if (confirmUpperCase && confirmLowerCase && confirmNumbers && confirmSymbols) {
    options = upperCase.concat(lowerCase, numbers, symbols);

    // Selected 3 options for password
  } else if (confirmUpperCase && confirmLowerCase && confirmNumbers) {
    options = upperCase.concat(upperCase, lowerCase, numbers);
  
  } else if (confirmUpperCase && confirmLowerCase && confirmSymbols) {
    options = upperCase.concat(upperCase, lowerCase, symbols);
  
  } else if (confirmUpperCase && confirmLowerCase && confirmSymbols) {
    options = upperCase.concat(upperCase, numbers, symbols);

  } else if (confirmLowerCase && confirmNumbers && confirmSymbols) {
    options = upperCase.concat(lowerCase, numbers, symbols);

    // Selected 2 options for password
  } else if (confirmUpperCase && confirmLowerCase) {
    options = upperCase.concat(lowerCase);
  
  } else if (confirmUpperCase && confirmNumbers) {
    options = upperCase.concat(numbers);
  
  } else if (confirmUpperCase && confirmSymbols) {
    options = upperCase.concat(symbols);

  } else if (confirmLowerCase && confirmNumbers) {
    options = lowerCase.concat(numbers);

  } else if (confirmLowerCase && confirmSymbols) {
    options = lowerCase.concat(symbols);

  } else if (confirmNumbers && confirmSymbols) {
    options = numbers.concat(symbols);

    // Selected only 1 option for password
  } else if (confirmUpperCase) {
    options = upperCase;

  } else if (confirmLowerCase) {
    options = lowerCase;
  
  } else if (confirmNumbers) {
    options = numbers;

  } else if (confirmSymbols) {
    options = symbols;
  };

  var password = [];

  // Random selection variable
  for (var i = 0; i < enter; i++) {
    var chooseOptions = options[Math.floor(Math.random() * options.length)];
    password.push(chooseOptions);
  }

    var test = password.join("");
    UserInput(test);
    return test;
}

function UserInput(test) {
  document.getElementById("password").passwordText = test;
}