function CountryList() {
  this.hanasCountries = ["UNITED STATES", "CANADA", "MEXICO", "UNITED KINGDOM", "DENMARK", "BELGIUM", "NETHERLANDS", "GERMANY", "FRANCE", "ITALY", "HONG KONG", "SOUTH KOREA", "AUSTRALIA", "NEW ZEALAND", "BAHAMAS", "SWITZERLAND"];

  this.getCountries = function() {
    userCountries = document.getElementById('user-list').value;
    return userCountries.toUpperCase().split(", ");
  }
}

var userList = new CountryList();
var countries;
  // Returns "h" if user wants to guess Hana's countries, or "m" if they want to challenge a friend.

function pickCountryArray() {
  document.getElementById('choice').innerHTML = "Choose 'Hana' to use the provided countries or choose 'mine' to provide your own.";
  choice = document.getElementById('countries-list').value;
  while (choice.charAt(0).toLowerCase() != "h" && choice.charAt(0).toLowerCase() != "m") {
    choice = document.getElementById('countries-list').value;
  }
  document.getElementById('choice').innerHTML = "You have chosen " + choice;
  var arrayType = choice.charAt(0).toLowerCase();
  if (arrayType == "h") {
    return userList.hanasCountries;
  }
  else if (arrayType == "m") {
    return userList.getCountries();
  }
}
  // Returns "c" if user wants to guess by country names or "n" if by number of countries.

function guessNumber(countries) {
  //Prompts user to guess how many countries.
  var message, answer, guess;
  guess = document.getElementById('number-input').value;
  // Checks if the user's guess is a number.
  answer = countries.length;
  if (isNaN(guess)) {
    document.getElementById('number-message').innerHTML = "I'm sorry, that guess was not a number. Please choose a number and try again.";
    guess = document.getElementById('number-input').value;
  }
  // Checks if the user's guess is correct.
  if (guess == answer) {
    message = "You are correct!";
  } else if (guess < answer) {
    message = "I'm sorry, you guessed too few countries.";
  } else {
    message = "I'm sorry, you guessed too many countries.";
  }
  document.getElementById('number-message').innerHTML = message;
}

function guessCountries(countries) {
  var message, answer, guess;
  var country = 0;
  guess = document.getElementById('country-input').value.toUpperCase();
  for (var i = 0; i < countries.length; i++) {
    if (guess === countries[i]) {
      country += 1;
    }
  }
  if (country === 1) {
    message = "You are correct!";
  }
  else {
    message = "I have not visited that country.";
  }
  document.getElementById('countries-message').innerHTML = message;
}

document.getElementById('question').innerHTML = "Choose if you want to use my countries or provide your own";
document.getElementById('game-start').addEventListener('click', function(e) {
  countries = pickCountryArray()
});
document.getElementById('user-countries').addEventListener('click', function(e) {
  userList.getCountries()
});
document.getElementById('countries-start').addEventListener('click', function(e) {
  guessCountries(countries)
});
document.getElementById('number-start').addEventListener('click', function(e) {
  guessNumber(countries)
});
