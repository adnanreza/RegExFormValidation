// Form Blur Event Listeners
document.getElementById("name").addEventListener("blur", validateName);
document
  .getElementById("postalCode")
  .addEventListener("blur", validatePostalCode);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.getElementById("name");
  //start with and ends with a letter and has length between 2-10
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validatePostalCode() {
  const postalCode = document.getElementById("postalCode");
  //start with and ends with a letter and has length between 2-10
  const re = /^[A-Z]([0-9][A-Z]){2}[0-9]$/;

  if (!re.test(postalCode.value)) {
    postalCode.classList.add("is-invalid");
  } else {
    postalCode.classList.remove("is-invalid");
  }
}

function validateEmail() {}

function validatePhone() {}
