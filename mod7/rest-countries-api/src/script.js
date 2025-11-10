import { createCountryCard } from './components/createDomEl.js';
import { showError } from './components/error.js';
import {
  countriesDiv,
  errorDiv,
  loadingDiv,
} from './components/getDomElements.js';
import { setupSearch } from './components/searchBar.js';
import { fetchCountries } from './service/service.js';

// Render countries to the DOM
function renderCountries(countries) {
  const countriesHTML = countries.map(createCountryCard).join('');
  countriesDiv.innerHTML = countriesHTML;
  loadingDiv.style.display = 'none';
  errorDiv.style.display = 'none';
  countriesDiv.style.display = 'grid';
}

// Main function to load and display countries
async function loadCountries() {
  try {
    const countries = await fetchCountries();
    renderCountries(countries);
  } catch (error) {
    showError(error.message);
  }
}

// Handle search input
export async function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase().trim();

  try {
    const allCountries = await fetchCountries();
    const filteredCountries = allCountries.filter(
      country =>
        country.name.common.toLowerCase().includes(searchTerm) ||
        country.region.toLowerCase().includes(searchTerm)
    );
    renderCountries(filteredCountries);
  } catch (error) {
    showError(error.message);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  loadCountries();
  setupSearch();
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', handleSearch);

  const darkModeButton = document.querySelector('.theme-button');
  darkModeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      darkModeButton.textContent = 'Dark Mode';
    } else {
      darkModeButton.textContent = 'Light Mode';
    }
  });
});

// Make loadCountries available globally for the retry button
window.loadCountries = loadCountries;
