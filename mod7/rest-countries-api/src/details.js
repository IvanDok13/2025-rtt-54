import { renderCountryDetails } from './components/createDomEl.js';
import { fetchCountryDetails } from './service/service.js';

// Get country name from URL parameters
function getCountryNameFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('name');
}

// Load country details
async function loadCountryDetails() {
  const countryName = getCountryNameFromURL();

  if (!countryName) {
    document.getElementById('country-details').innerHTML =
      '<p>No country specified.</p>';
    return;
  }

  try {
    const country = await fetchCountryDetails(countryName);
    renderCountryDetails(country);
  } catch (error) {
    document.getElementById('country-details').innerHTML = `
      <div class="error-message">
        <h3>Error Loading Country</h3>
        <p>${error.message}</p>
      </div>
    `;
  }
}

// Initialize details page
document.addEventListener('DOMContentLoaded', loadCountryDetails);
