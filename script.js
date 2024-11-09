let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (input) { // Ensure input is not null
      if (e.target.innerHTML == "=") {
        try {
          string = eval(string);
          input.value = string;
        } catch {
          input.value = "ERROR";
          string = ""; // Reset the string on error
        }
      } else if (e.target.innerHTML == "AC") {
        string = "";
        input.value = string;
      } else if (e.target.innerHTML == "DEL") {
        string = string.slice(0, -1);
        input.value = string;
      } else if (e.target.innerHTML == "%") {
        string = (parseFloat(string) / 100).toString();
        input.value = string;
      } else if (e.target.innerHTML == "x") {
        string += "*";
        input.value = string;
      } else {
        if (string === "0" && e.target.innerHTML !== ".") {
          string = e.target.innerHTML; // Replace "0" with the new input
        } else {
          string += e.target.innerHTML;
        }
        input.value = string;
      }
    }
  });
});
