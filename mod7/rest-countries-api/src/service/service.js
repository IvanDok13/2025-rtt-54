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
    const response = await fetch(`${API_URL}name/${countryName}?fullText=true`);

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

export async function getCountryNameByCode(countryCode) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );

    if (!response.ok) {
      throw new Error('Border country not found');
    }

    const country = await response.json();
    return country[0].name.common;
  } catch (error) {
    console.error('Error fetching border country:', error);
    return countryCode;
  }
}

export async function getBorderCountryNames(borderCodes) {
  if (!borderCodes || borderCodes.length === 0) return [];

  const borderPromises = borderCodes.map(code => getCountryNameByCode(code));
  const borderNames = await Promise.all(borderPromises);
  return borderNames;
}
