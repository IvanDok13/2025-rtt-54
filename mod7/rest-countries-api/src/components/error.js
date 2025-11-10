import { countriesDiv, errorDiv, loadingDiv } from './getDomElements.js';

export function showError(message) {
  loadingDiv.style.display = 'none';
  countriesDiv.style.display = 'none';
  errorDiv.style.display = 'block';
  errorDiv.innerHTML = `
        <h3>Error Loading Countries</h3>
        <p>${message}</p>
        <button class="retry-button" onclick="loadCountries()">Try Again</button>
    `;
}
