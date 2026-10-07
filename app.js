let inputBox = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let string = "";
let arra = Array.from(buttons);

arra.forEach((button) => {
  button.addEventListener("click", (eobj) => {
    if (eobj.target.innerHTML == "=") {
      string = eval(string);
      inputBox.value = string;
    } else if (eobj.target.innerHTML == "AC") {
      string = "";
      inputBox.value = string;
    } else if (eobj.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      inputBox.value = string;
    } else {
      string += eobj.target.innerHTML;
      inputBox.value = string;
    }
  });
});
