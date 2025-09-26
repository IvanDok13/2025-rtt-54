// Select all necessary DOM elements (error message spans)
const registrationformEl = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirmPassword');
const usernameErrorEl = document.getElementById('usernameError');
const emailErrorEl = document.getElementById('emailError');
const passwordErrorEl = document.getElementById('passwordError');
const confirmPasswordErrorEl = document.getElementById('confirmPasswordError');

// Load saved username: On page load, check if a username is saved in localStorage. If so, pre-fill the username field.

document.addEventListener('DOMContentLoaded', () => {
  const savedUsername = localStorage.getItem('savedUsername');
  if (savedUsername) {
    usernameInput.value = savedUsername;
  }
});

// Real-time validation: Add input event listeners to each field.

usernameInput.addEventListener('input', validateUsername);

emailInput.addEventListener('input', validateEmail);

passwordInput.addEventListener('input', validatePassword);

confirmPasswordEl.addEventListener('input', function (event) {});

// Check validity using the Constraint Validation API (inputElement.validity).
// Display appropriate custom error messages in the corresponding <span> elements. Clear messages if valid.

function validateUsername() {
  if (usernameInput.validity.valueMissing) {
    usernameInput.setCustomValidity('Username is required.');
  } else if (usernameInput.validity.tooShort) {
    usernameInput.setCustomValidity(
      `Username must be at least ${usernameInput.minLength} characters; you entered ${usernameInput.value.length}.`
    );
  } else {
    usernameInput.setCustomValidity('');
  }
  usernameErrorEl.textContent = usernameInput.validationMessage;
}

function validateEmail() {
  if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity('Email is required.');
  } else if (
    emailInput.validity.patternMismatch ||
    emailInput.validity.typeMismatch
  ) {
    emailInput.setCustomValidity('Please enter a valid email address.');
  } else {
    emailInput.setCustomValidity('');
  }
  emailErrorEl.textContent = emailInput.validationMessage;
}

function validatePassword() {
  if (passwordInput.validity.valueMissing) {
    passwordInput.setCustomValidity('Password is required.');
  } else if (passwordInput.validity.patternMismatch) {
    passwordInput.setCustomValidity(
      'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&).'
    );
  } else if (passwordInput.validity.tooShort) {
    passwordInput.setCustomValidity(
      'Password must be at least 8 characters long.'
    );
  } else {
    passwordInput.setCustomValidity('');
  }
  passwordErrorEl.textContent = passwordInput.validationMessage;
}

// For the “Confirm Password” field, explicitly check if it matches the “Password” field.

// Form submission: Add a submit event listener to the form.
// Call event.preventDefault().
// Perform a final validation check on all fields.

// If all fields are valid:
// Display a success message (e.g., an alert or update a status message on the page).
// Save the username to localStorage.
// Optionally, reset the form.
// If any field is invalid, ensure error messages are displayed and focus on the first invalid field.
