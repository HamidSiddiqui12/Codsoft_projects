let string = "";
let display = document.getElementById("calc-display"); // Get the input field by its id
let inputs = document.querySelectorAll('input[type="button"]');

Array.from(inputs).forEach((input) => {
  input.addEventListener("click", (event) => {
    const value = event.target.value;

    // Check if the clicked value is a symbol (+, -, *, /)
    const isSymbol = /[\+\-\*\/]/.test(value);

    // Check for consecutive symbols
    if (isSymbol && /[\+\-\*\/]$/.test(string)) {
      alert("Consecutive symbols are not allowed.");
      return;
    }

    if (value === "=") {
      if (string) {
        // Check if there is a value
        try {
          string = eval(string);
          display.value = string;
        } catch (error) {
          alert("Invalid expression");
          string = "";
          display.value = string;
        }
      } else {
        alert("Please enter a value before using the equals sign.");
      }
    } else if (value === "AC") {
      string = "";
      display.value = string;
    } else if (value === "DE") {
      if (string.length > 0) {
        let newStr = string.slice(0, -1);
        display.value = newStr;
        string = newStr;
      }
    } else {
      string = string + value;
      display.value = string;
    }
  });
});
