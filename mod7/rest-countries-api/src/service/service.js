import { showLoading } from '../components/loader.js';
import { API_URL, FIELDS } from '../const/index.js';

export async function fetchCountries() {
  showLoading();

  try {
    const response = await fetch(`${API_URL}?fields=${FIELDS}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch countries: ${response.status}`);
    }

    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
}
