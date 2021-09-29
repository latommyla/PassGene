// Assignment Code
var enter;
var options;
var password = [];
var generateBtn = document.querySelector("#generate");

upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", ">", "<", "?", "/"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("generate").placeholder = ps;
});


function generatePassword(){
  enter = parseInt(prompt("How many characters? Choose between 8 and 128"));
  if (!enter) {
    alert("Choose how many characters!");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Please choose between 8 and 128"));

  } else {
    upperCase = confirm("Uppcase letters?")
    lowerCase = confirm("Lowercase letters?")
    numbers = confirm("Numbers?")
    symbols = confirm("Symbols?")
  };

  if (!upperCase && !lowerCase && !numbers && !symbols) {
    options = alert("You must choose!");

    // Selected all 4 options for password
  } else if (upperCase && lowerCase && numbers && symbols) {
    options = upperCase.concat(lowerCase, numbers, symbols);

    // Selected 3 options for password
  } else if (upperCase && lowerCase && numbers) {
    options = upperCase.concat(upperCase, lowerCase, numbers);
  
  } else if (upperCase && lowerCase && symbols) {
    options = upperCase.concat(upperCase, lowerCase, symbols);
  
  } else if (upperCase && numbers && symbols) {
    options = upperCase.concat(upperCase, numbers, symbols);

  } else if (lowerCase && numbers && symbols) {
    options = upperCase.concat(lowerCase, numbers, symbols);

    // Selected 2 options for password
  } else if (upperCase && lowerCase) {
    options = upperCase.concat(lowerCase);
  
  } else if (upperCase && numbers) {
    options = upperCase.concat(numbers);
  
  } else if (upperCase && symbols) {
    options = upperCase.concat(symbols);

  } else if (lowerCase && numbers) {
    options = lowerCase.concat(numbers);

  } else if (lowerCase && symbols) {
    options = lowerCase.concat(symbols);

  } else if (numbers && symbols) {
    options = numbers.concat(symbols);

    // Selected only 1 option for password
  } else if (upperCase) {
    options = upperCase;

  } else if (lowerCase) {
    options = lowerCase;
  
  } else if (numbers) {
    options = numbers;

  } else if (symbols) {
    options = symbols;
  };

  var password = [];

  for (var i = 0; i < enter; i++) {
    var chooseOptions = options[Math.floor(Math.random() * options.length)];
    passwordText.push(chooseOptions);
  }

  var ps = password.join("");
  UserInput(ps);
  return ps;
  }

  function UserInput(ps) {
    document.getElementById("password").textContent = ps;
  }