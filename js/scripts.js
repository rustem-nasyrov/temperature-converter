if (c.checked) {
  labelC.classList.add("radio__label--active");
}
inputField.onkeyup = function() {
  var val;
  if (f.checked == true) {
    val = (5 / 9 * (inputField.value - 32));
    outputField.value = val.toFixed(2) + " °C";
  } else if (c.checked == true) {
    val = (9 / 5 * inputField.value + 32);
    outputField.value = val.toFixed(2) + " °F";
  }
};
labelC.onclick = function() {
  labelF.classList.remove("radio__label--active");
  labelC.classList.add("radio__label--active");
};
labelF.onclick = function() {
  labelC.classList.remove("radio__label--active");
  labelF.classList.add("radio__label--active");
};
