var display = document.getElementById('display');

function appendToScreen(btnVal) {
  display.value += btnVal;
}

function clearScreen() {
  display.value = '';
}

function deleteCharacter() {
  if (display.value) {
    display.value = display.value.slice(0, -1);
  }
}

// Symbol button click event
document.getElementById("buttons").addEventListener("click", function(e) {
  if(e.target.matches("button")) {
    var btnVal = e.target.innerText;
    switch(btnVal) {
      case '=':
        try {
          var result = new Function('return ' + display.value)();
          display.value = result.toString();
        } catch(err) {
          display.value = "错误";
        }
        break;
      case 'C':
        clearScreen();
        break;
      case 'DEL':
        deleteCharacter();
        break;
      default:
        appendToScreen(btnVal);
    }
  }
});

//Advanced computing button click event
document.getElementById("advanced-buttons").addEventListener("click", function(e) {
  if(e.target.matches("button")) {
    var op = e.target.innerText;
    var curVal = eval(display.value);
    switch(op) {
      case 'e^x':
        display.value = Math.exp(curVal).toString();
        break;
      case 'ln':
        display.value = Math.log(curVal).toString();
        break;
      case 'x^y':
        display.value = 'Math.pow(' + display.value + ',y';   // y is the desired variable
        break;
        case 'sin':
            var rad = curVal * (Math.PI / 180);   // Convert angles to radians
        display.value = Math.sin(rad).toString();
        break;
        case 'cos':
            var rad = curVal * (Math.PI / 180);   // Convert angles to radians
        display.value = Math.cos(rad).toString();
        break;
    }
  }
});