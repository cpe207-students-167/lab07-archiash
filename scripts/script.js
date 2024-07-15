const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");

const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

function resetAlert(input){
  input.classList.remove("is-valid");
  input.classList.remove("is-invalid");
}

function resetInput(input){
  resetAlert(input);
  input.value = "";
}

function addValidCheck(input, condition){
  
  if (condition) {
    input.classList.add("is-valid");
    console.log("Validation: " + input.id + " Value: " + input.value + " Pass");
    return true;
  } else {
    input.classList.add("is-invalid");
    console.log("Validation: " + input.id + " Value: " + input.value + " Not-Pass");
    return false;
  }
}

firstNameInput.onkeyup = () => resetAlert(firstNameInput);
lastNameInput.onkeyup = () => resetAlert(lastNameInput);
emailInput.onkeyup = () => resetAlert(emailInput);
passwordInput.onkeyup = () => resetAlert(passwordInput);
confirmPasswordInput.onkeyup = () => resetAlert(confirmPasswordInput);

submitBtn.onclick = () => {
  let isValid = true;
  isValid = addValidCheck(firstNameInput, firstNameInput.value.length > 0)
  isValid = addValidCheck(lastNameInput, lastNameInput.value.length > 0)
  isValid = addValidCheck(emailInput, validateEmail(emailInput.value))
  isValid = addValidCheck(passwordInput, passwordInput.value.length > 5)
  isValid = addValidCheck(confirmPasswordInput, confirmPasswordInput.value.length > 5 && confirmPasswordInput.value == passwordInput.value)
  if (isValid) alert("Registered successfully");
};

resetBtn.onclick = () => {
  resetInput(firstNameInput);
  resetInput(lastNameInput);
  resetInput(emailInput);
  resetInput(passwordInput);
  resetInput(confirmPasswordInput);
};