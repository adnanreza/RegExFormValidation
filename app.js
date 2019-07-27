// Form Blur Event Listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.getElementById("name");
  //start with and ends with a letter and has length between 2-10
  const re = /^[a-zA-Z]{2, 10}$/;
}

function validateZip() {}

function validateEmail() {}

function validatePhone() {}
