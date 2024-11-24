const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission by default
  let valid = true;

  // Validasi email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validasi nomor telepon
  const phonePattern = /^[0-9]{10,15}$/;
  if (!phonePattern.test(phoneInput.value)) {
    phoneError.textContent =
      "Please enter a valid phone number (10-15 digits).";
    valid = false;
  } else {
    phoneError.textContent = "";
  }

  // Jika validasi berhasil, arahkan ke file course.html
  if (valid) {
    window.location.href = "course.html";
  }
});
