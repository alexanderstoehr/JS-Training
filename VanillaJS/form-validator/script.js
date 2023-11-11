const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


// Show input error message
function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message
}

// Show input success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success"
}

// Check email is valid
function checkEmail (input) {
  const re =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(String(input.value).toLocaleLowerCase())){
    showSuccess(input);
  } else {
    showError(input, "Email not valid")
  }
}

// Title Case Input
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check required fields
function checkRequired(inputArr){
  inputArr.forEach(input => {
    if (input.value === ""){
        showError(input, `${getFieldName(input)} is required`);
      } else {
        showSuccess(input);
      }
      
  });
}

//Check input length
function checkLength (input, min, max){
  if (input.value.length < min){
    showError(input, `${getFieldName(input)} minimum ${min} chars`)
  } else if (input.value.length > max){
    showError(input, `${getFieldName(input)} maximum ${max} chars`)
  } else {
    showSuccess(input)
  }
}

// Check password match
function checkPasswordMatch(password, password2){
  if (password.value === password2.value){
    showSuccess(password2)
  } else {
    showError(password2, `Passwords do not match`)
  }
}

// Event listeners
form.addEventListener("submit", function(e){
  e.preventDefault();
  
  checkRequired([username,email,password,password2])
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  checkEmail(email)
  checkPasswordMatch(password, password2)
})


// Bad style
// if (username.value === ""){
//   showError(username, "Username required");
// } else {
//   showSuccess(username);
// }

// if (email.value === ""){
//   showError(email, "Email required");
// } else if (!isValidEmail(email.value)){
//   showError(email, "Email not valid");

// } else {
//   showSuccess(email);
// }

// if (password.value === ""){
//   showError(password, "Password required");
// } else if (password.value.length < 6){
//   showError(password, "Password minimum 6 chars");
// } else {
//   showSuccess(password);
//   console.log(password)
// }

// if (password2.value === ""){
//   showError(password2, "Password required");
// } else if (password.value !== password2.value){
//   showError(password2, "Password not the same");
// } else {
//   showSuccess(password2);
// }