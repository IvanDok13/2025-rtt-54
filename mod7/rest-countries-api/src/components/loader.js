import { countriesDiv, errorDiv, loadingDiv } from './getDomElements.js';

export function showLoading() {
  loadingDiv.style.display = 'block';
  countriesDiv.style.display = 'none';
  errorDiv.style.display = 'none';
}
