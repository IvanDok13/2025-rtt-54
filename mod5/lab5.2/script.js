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

// Real-time validation: Add input event listeners to each field.
// Check validity using the Constraint Validation API (inputElement.validity).
// For the “Confirm Password” field, explicitly check if it matches the “Password” field.
// Display appropriate custom error messages in the corresponding <span> elements. Clear messages if valid.
// Form submission: Add a submit event listener to the form.
// Call event.preventDefault().
// Perform a final validation check on all fields.
// If all fields are valid:
// Display a success message (e.g., an alert or update a status message on the page).
// Save the username to localStorage.
// Optionally, reset the form.
// If any field is invalid, ensure error messages are displayed and focus on the first invalid field.
