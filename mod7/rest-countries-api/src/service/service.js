import { showLoading } from '../components/loader.js';
import { API_URL, FIELDS } from '../const/index.js';

export async function fetchCountries() {
  showLoading();

  try {
    const response = await fetch(`${API_URL}all?fields=${FIELDS}`);

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

export async function fetchCountryDetails(countryName) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );

    if (!response.ok) {
      throw new Error('Country not found');
    }

    const countries = await response.json();
    return countries[0];
  } catch (error) {
    console.error('Error fetching country details:', error);
    throw error;
  }
}
