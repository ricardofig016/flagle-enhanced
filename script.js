var data = [];
var dataCopy = [];
var dataShuffled = [];

var game_difficulty = 3; // 1 - easy , 2 - medium , 3 - hard

var currEntry;
var guesses = 0;
var stats;

var results = []; // booleans
var attempts = []; // integers
var stats = {
  curr_streak: 0,
  highest_streak: 0,
};

async function main() {
  await readData();
  stats = retrieveStats();
  if (!stats) {
    stats = {
      curr_streak: 0,
      highest_streak: 0,
    };
    storeStats();
  }
  newFlag();
  autocomplete();
  updateStats();
}

async function readData() {
  const response = await fetch("data.csv");
  const data_csv = await response.text();

  // Split the CSV data into rows
  const rows = data_csv.split("\n");

  // Iterate through rows and extract entry information
  for (let i = 1; i < rows.length; i++) {
    const columns = rows[i].split(",");
    const entryName = columns[0].trim();
    const category = columns[1].trim();
    const difficulty = columns[2].trim();
    const flagPath = columns[3].trim();

    // Add entry to data array
    data.push([entryName, category, difficulty, flagPath]);
  }

  // Store new data in copy array
  dataCopy = [...data];

  // Ignore first n entries
  //dataCopy.splice(0, 130);

  //console.log(data);
}

function shuffleData() {
  dataShuffled = [...data];
  dataShuffled.sort(() => Math.random() - 0.5);
}

function storeStats() {
  // Stringify the object
  const statsString = JSON.stringify(stats);

  // Store the stringified object in localStorage
  localStorage.setItem("userStats", statsString);
}

function retrieveStats() {
  // Retrieve and parse the stringified object from localStorage
  const storedStatsString = localStorage.getItem("userStats");
  return JSON.parse(storedStatsString);
}

function newFlag() {
  // Change title
  document.getElementById("body-title").querySelector("h2").textContent =
    "Where is this flag from?";

  // Hide end-game, show search-container and focus input
  document.getElementById("end-game").style.display = "none";
  document.getElementById("search-container").style.display = "block";
  document.getElementById("search").focus();

  // Get random flag file
  if (dataShuffled.length === 0) {
    shuffleData();
  }

  var entry_difficulty;
  do {
    /*Change from dataCopy to dataShuffle to control if 
      the flags are sorted or shuffled*/
    currEntry = dataShuffled.shift();

    if (!currEntry) {
      shuffleData();
      currEntry = dataShuffled.shift();
    }

    entry_difficulty = currEntry[2];
  } while (entry_difficulty > game_difficulty);

  console.log("new flag found: " + currEntry);
  console.log("entry diff: " + entry_difficulty);

  // Create an image object
  var tempImage = new Image();

  // Set the source of the temporary image to the random flag image
  tempImage.src = currEntry[3];

  // When the temporary image is loaded, get its width and height
  tempImage.onload = function () {
    var flagWidth = 300;
    var flagHeight = (tempImage.height * 300) / tempImage.width;

    // Set height, background-position and background-size
    var flagSections = document.querySelectorAll(".flag-row div");
    flagSections.forEach(function (section, index) {
      section.style.height = flagHeight / 2 + "px";
      section.style.backgroundImage = "";
      section.style.backgroundSize = flagWidth + "px " + flagHeight + "px";

      var posX = (index % 3) * -100;
      var posY = Math.floor(index / 3) * -(flagHeight / 2);
      section.style.backgroundPosition = posX + "px " + posY + "px";
    });
  };

  //console.log("new flag image loaded");
}

function handleSearchSubmit(inputText) {
  if (inputText.toUpperCase() === currEntry[0].toUpperCase()) {
    // Answer found
    handleEndGame(true);
  } else {
    // Wrong answer
    showRandomSection();
    // Check if game is lost
    if (guesses >= 6) {
      handleEndGame(false);
    }
  }
  document.getElementById("search").value = "";
}

function showRandomSection() {
  guesses++;
  var flagSections = document.querySelectorAll(".flag-row div");
  var randomSection = flagSections[Math.floor(Math.random() * 6)];
  while (randomSection.style.backgroundImage) {
    randomSection = flagSections[Math.floor(Math.random() * 6)];
  }
  randomSection.style.backgroundImage = 'url("' + currEntry[3] + '")';
}

function showAllSections() {
  var flagSections = document.querySelectorAll(".flag-row div");
  flagSections.forEach((section) => {
    section.style.backgroundImage = 'url("' + currEntry[3] + '")';
  });
}

function handleEndGame(isWin) {
  // Hide search-container and show end-game
  var endGameDiv = document.getElementById("end-game");
  document.getElementById("search-container").style.display = "none";
  endGameDiv.style.display = "block";
  // Focus end-game button
  endGameDiv.querySelector("button").focus();

  showAllSections();

  var title = document.getElementById("body-title").querySelector("h2");
  if (isWin) {
    title.textContent = "Correct! The answer is " + currEntry[0];
    // Update stats
    stats.curr_streak++;
    if (stats.curr_streak > stats.highest_streak) {
      stats.highest_streak++;
    }
    results.push(true);
    attempts.push(guesses + 1);
  } else {
    title.textContent = "Wrong... The answer is " + currEntry[0];
    // Update stats
    stats.curr_streak = 0;
    results.push(false);
  }

  console.log(stats);

  guesses = 0;
  storeStats();
  updateStats();

  remove_end_game_button_event_listener();
  setTimeout(() => {
    add_end_game_button_event_listener();
  }, 500);
}

function updateStats() {
  function getWinRate(results) {
    if (results.length === 0) {
      return 0;
    }

    // Count the number of true values (won rounds)
    const wonRounds = results.filter((result) => result === true).length;

    // Return the win rate as a percentage
    return ((wonRounds / results.length) * 100).toFixed(2);
  }

  function getAverageAttempts(attempts) {
    if (attempts.length === 0) {
      return 0;
    }

    // Calculate the sum of attempts
    const sum = attempts.reduce((acc, current) => acc + current, 0);

    // Return the average
    return (sum / attempts.length).toFixed(2);
  }

  document.getElementById(
    "stats-curr-streak"
  ).innerHTML = `<p>Current Streak: ${stats.curr_streak}</p>`;
  document.getElementById(
    "stats-highest-streak"
  ).innerHTML = `<p>Highest Streak: ${stats.highest_streak}</p>`;
  document.getElementById(
    "stats-win-rate"
  ).innerHTML = `<p>Win Rate: ${getWinRate(results)}%</p>`;
  document.getElementById(
    "stats-avg-attempts"
  ).innerHTML = `<p>Average Attempts: ${getAverageAttempts(attempts)}</p>`;
}

function autocomplete() {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  var inp = document.getElementById("search");
  inp.addEventListener("input", handleInputChange);
  inp.addEventListener("click", handleInputChange);

  function handleInputChange() {
    var a,
      b,
      i,
      val = inp.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();

    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", inp.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    inp.parentNode.appendChild(a);
    /*limit number of items*/
    const max_items = 6; // 6 is a good maximum
    let items = 0;

    /*for each item in the array...*/
    for (i = 0; i < data.length && items < max_items; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (data[i][0].toUpperCase().includes(val.toUpperCase())) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        b.innerHTML += data[i][0];
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + data[i][0] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          handleSearchSubmit(inp.value);
          closeAllLists();
        });
        a.appendChild(b);
        items++;
      }
    }

    /*add focus*/
    var x = document.getElementById(inp.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    currentFocus = 0;
    addActive(x);
  }

  // Define your event listener function
  function eventListenerFunction(e) {
    var x = document.getElementById("searchautocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.key === "Enter") {
      if (x && x.length !== 0) {
        disableEventListener(200);
        x[currentFocus].click();
      } else {
        handleInputChange();
      }
    }
  }

  // Add the event listener
  var inp = document.getElementById("search");
  inp.addEventListener("keydown", eventListenerFunction);

  // Function to disable the event listener for a certain duration
  function disableEventListener(duration) {
    // Remove the event listener
    inp.removeEventListener("keydown", eventListenerFunction);

    // Set a timeout to re-add the event listener after the specified duration
    setTimeout(function () {
      inp.addEventListener("keydown", eventListenerFunction);
    }, duration);
  }

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x || x.length === 0) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (!elmnt || (elmnt != x[i] && elmnt != inp)) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
      closeAllLists(null);
    }
  });
}

function add_end_game_button_event_listener() {
  var endGameButton = document
    .getElementById("end-game")
    .querySelector("button");

  endGameButton.addEventListener("mousedown", newFlag);
  endGameButton.addEventListener("keydown", handle_end_game_button_keydown);
}

function remove_end_game_button_event_listener() {
  var endGameButton = document
    .getElementById("end-game")
    .querySelector("button");

  endGameButton.removeEventListener("mousedown", newFlag);
  endGameButton.removeEventListener("keydown", handle_end_game_button_keydown);
}

function handle_end_game_button_keydown(e) {
  if (e.key === "Enter") {
    newFlag();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Listener for difficulty
  var select = document.getElementById("difficulty-select");
  select.addEventListener("change", function () {
    switch (select.value) {
      case "easy":
        game_difficulty = 1;
        break;
      case "medium":
        game_difficulty = 2;
        break;
      case "hard":
        game_difficulty = 3;
        break;
      default:
        game_difficulty = 3;
    }
  });

  add_end_game_button_event_listener();
});
