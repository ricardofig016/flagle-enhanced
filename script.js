const countries = [
  ["Afghanistan", "assets/flags/Flag_of_Afghanistan-512x341.png"],
  ["Albania", "assets/flags/Flag_of_Albania-512x366.png"],
  ["Algeria", "assets/flags/Flag_of_Algeria-512x341.png"],
  //["American Samoa","",],
  ["Andorra", "assets/flags/Flag_of_Andorra-512x358.png"],
  ["Angola", "assets/flags/Flag_of_Angola-512x341.png"],
  //["Anguilla","",],
  ["Antarctica", "assets/flags/Flag_of_Antarctica-512x341.png"],
  //["Antigua and Barbuda","",],
  //["Argentina","",],
  //["Armenia","",],
  //["Aruba","",],
  //["Australia","",],
  //["Austria","",],
  //["Azerbaijan","",],
  //["Bahamas","",],
  //["Bahrain","",],
  //["Bangladesh","",],
  //["Barbados","",],
  //["Belarus","",],
  //["Belgium","",],
  //["Belize","",],
  //["Benin","",],
  //["Bermuda","",],
  //["Bhutan","",],
  //["Bolivia","",],
  //["Bosnia and Herzegovina","",],
  //["Botswana","",],
  //["Brazil","",],
  //["British Indian Ocean Territory","",],
  //["Brunei","",],
  //["Bulgaria","",],
  //["Burkina Faso","",],
  //["Burundi","",],
  //["Cambodia","",],
  //["Cameroon","",],
  //["Canada","",],
  //["Cape Verde","",],
  //["Cayman Islands","",],
  //["Central African Republic","",],
  //["Chad","",],
  //["Chile","",],
  //["China","",],
  //["Christmas Island","",],
  //["Cocos Islands","",],
  //["Colombia","",],
  //["Comoros","",],
  //["Congo","",],
  //["Cook Islands","",],
  //["Costa Rica","",],
  //["Cote D'ivoire","",],
  //["Croatia","",],
  //["Cuba","",],
  //["Cyprus","",],
  //["Czechia","",],
  //["Democratic Republic of the Congo","",],
  //["Denmark","",],
  //["Djibouti","",],
  //["Dominica","",],
  //["Dominican Republic","",],
  //["Ecuador","",],
  //["Egypt","",],
  //["El Salvador","",],
  //["Equatorial Guinea","",],
  //["Eritrea","",],
  //["Estonia","",],
  //["Eswatini","",],
  //["Ethiopia","",],
  //["Falkland Islands (Malvinas)","",],
  //["Faroe Islands","",],
  //["Fiji","",],
  //["Finland","",],
  //["France","",],
  //["French Guiana","",],
  //["French Polynesia","",],
  //["French Southern Territories","",],
  //["Gabon","",],
  //["Gambia","",],
  //["Georgia","",],
  //["Germany","",],
  //["Ghana","",],
  //["Gibraltar","",],
  //["Greece","",],
  //["Greenland","",],
  //["Grenada","",],
  //["Guadeloupe","",],
  //["Guam","",],
  //["Guatemala","",],
  //["Guernsey","",],
  //["Guinea","",],
  //["Guinea-Bissau","",],
  //["Guyana","",],
  //["Haiti","",],
  //["Honduras","",],
  //["Hong Kong","",],
  //["Hungary","",],
  //["Iceland","",],
  //["India","",],
  //["Indonesia","",],
  //["Iran","",],
  //["Iraq","",],
  //["Ireland","",],
  //["Isle of Man","",],
  //["Israel","",],
  //["Italy","",],
  //["Jamaica","",],
  //["Japan","",],
  //["Jersey","",],
  //["Jordan","",],
  //["Kazakhstan","",],
  //["Kenya","",],
  //["Kiribati","",],
  //["Kosovo","",],
  //["Kuwait","",],
  //["Kyrgyzstan","",],
  //["Laos","",],
  //["Latvia","",],
  //["Lebanon","",],
  //["Lesotho","",],
  //["Liberia","",],
  //["Libya","",],
  //["Liechtenstein","",],
  //["Lithuania","",],
  //["Luxembourg","",],
  //["Macau","",],
  //["Macedonia","",],
  //["Madagascar","",],
  //["Malawi","",],
  //["Malaysia","",],
  //["Maldives","",],
  //["Mali","",],
  //["Malta","",],
  //["Marshall Islands","",],
  //["Martinique","",],
  //["Mauritania","",],
  //["Mauritius","",],
  //["Mayotte","",],
  //["Mexico","",],
  //["Micronesia","",],
  //["Moldova","",],
  //["Monaco","",],
  //["Mongolia","",],
  //["Montenegro","",],
  //["Montserrat","",],
  //["Morocco","",],
  //["Mozambique","",],
  //["Myanmar","",],
  //["Namibia","",],
  //["Nauru","",],
  //["Nepal","",],
  //["Netherlands","",],
  //["New Caledonia","",],
  //["New Zealand","",],
  //["Nicaragua","",],
  //["Niger","",],
  //["Nigeria","",],
  //["Niue","",],
  //["Norfolk Island","",],
  //["North Korea","",],
  //["Northern Mariana Islands","",],
  //["Norway","",],
  //["Oman","",],
  //["Pakistan","",],
  //["Palau","",],
  //["Palestine","",],
  //["Panama","",],
  //["Papua New Guinea","",],
  //["Paraguay","",],
  //["Peru","",],
  //["Philippines","",],
  //["Pitcairn Islands","",],
  //["Poland","",],
  //["Portugal","",],
  //["Puerto Rico","",],
  //["Qatar","",],
  //["Romania","",],
  //["Russia","",],
  //["Rwanda","",],
  //["Reunion","",],
  //["Saint Helena","",],
  //["Saint Kitts and Nevis","",],
  //["Saint Lucia","",],
  //["Saint Pierre and Miquelon","",],
  //["Samoa","",],
  //["San Marino","",],
  //["Saudi Arabia","",],
  //["Senegal","",],
  //["Serbia","",],
  //["Seychelles","",],
  //["Sierra Leone","",],
  //["Singapore","",],
  //["Slovakia","",],
  //["Slovenia","",],
  //["Solomon Islands","",],
  //["Somalia","",],
  //["South Africa","",],
  //["South Georgia and The South Sandwich Islands","",],
  //["South Korea","",],
  //["South Sudan","",],
  //["Spain","",],
  //["Sri Lanka","",],
  //["Sudan","",],
  //["Suriname","",],
  //["Sweden","",],
  //["Switzerland","",],
  //["Syria","",],
  //["Sao Tome and Principe","",],
  //["Taiwan","",],
  //["Tajikistan","",],
  //["Tanzania","",],
  //["Thailand","",],
  //["Timor-Leste","",],
  //["Togo","",],
  //["Tokelau","",],
  //["Tonga","",],
  //["Trinidad and Tobago","",],
  //["Tunisia","",],
  //["Turkey","",],
  //["Turkmenistan","",],
  //["Turks and Caicos Islands","",],
  //["Tuvalu","",],
  //["U.S. Virgin Islands","",],
  //["Uganda","",],
  //["Ukraine","",],
  //["United Arab Emirates","",],
  //["United Kingdom","",],
  //["United States","",],
  //["Uruguay","",],
  //["Uzbekistan","",],
  //["Vanuatu","",],
  //["Vatican City","",],
  //["Venezuela","",],
  //["Vietnam","",],
  //["Wallis and Futuna","",],
  //["Western Sahara","",],
  //["Yemen","",],
  //["Zambia","",],
  //["Zimbabwe","",],
];

var countriesShuffled = [];

var currCountry;
var guesses = 0;

function shuffleCountries() {
  countriesShuffled = [...countries];
  countriesShuffled.sort(() => Math.random() - 0.5);
}

function newFlag() {
  // Shuffle flags in first iteration
  if (countriesShuffled.length === 0) {
    shuffleCountries();
  }
  // Get random flag file
  currCountry = countriesShuffled.shift();

  // Create an image object
  var tempImage = new Image();

  // Set the source of the temporary image to the random flag image
  tempImage.src = currCountry[1];

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
}

function handleSearchSubmit(inputText) {
  if (inputText.toUpperCase() === currCountry[0].toUpperCase()) {
    // Answer found

    handleWin();
  } else {
    // Wrong answer
    showRandomSection();
    // Check if game is lost
    if (guesses >= 6) {
      handleLoss();
    }
  }
  document.getElementById("search").value = "";
}

function showRandomSection() {
  // Show random section
  guesses++;
  var flagSections = document.querySelectorAll(".flag-row div");
  var randomSection = flagSections[Math.floor(Math.random() * 6)];
  while (randomSection.style.backgroundImage) {
    randomSection = flagSections[Math.floor(Math.random() * 6)];
  }
  randomSection.style.backgroundImage = 'url("' + currCountry[1] + '")';
}

function showAllSections() {
  var flagSections = document.querySelectorAll(".flag-row div");
  flagSections.forEach((section) => {
    section.style.backgroundImage = 'url("' + currCountry[1] + '")';
  });
}

function handleLoss() {
  guesses = 0;
}

function handleWin() {
  showAllSections();
  guesses = 0;
}

function autocomplete(inp) {
  /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", handleInputChange);
  inp.addEventListener("click", handleInputChange);
  function handleInputChange(e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();

    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*limit number of items*/
    const max_items = 6;
    let items = 0;

    /*for each item in the array...*/
    for (i = 0; i < countries.length && items < max_items; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (countries[i][0].toUpperCase().includes(val.toUpperCase())) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        b.innerHTML += countries[i][0];
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + countries[i][0] + "'>";
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
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    currentFocus = 0;
    addActive(x);
  }

  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.key === "Enter" && x && x.length !== 0) {
      /*and simulate a click on the "active" item:*/
      x[currentFocus].click();
    }
  });

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

document.addEventListener("DOMContentLoaded", function () {});
