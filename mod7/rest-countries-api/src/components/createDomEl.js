import { getBorderCountryNames } from '../service/service.js';
import { formatCapital, formatPopulation } from './utils.js';

export function createCountryCard(country) {
  return `
<div class='country-card'>
  <a href='./details.html?name=${country.name.common}'>
    <img src='${country.flags.png}' alt='Flag of ${country.name.common}' />
    <div class='country-card-content'>
      <h2>${country.name.common}</h2>
      <p>
        <strong>Population:</strong> ${formatPopulation(country.population)}
      </p>
      <p>
        <strong>Region:</strong> ${country.region}
      </p>
      <p>
        <strong>Capital:</strong> ${formatCapital(country.capital)}
      </p>
    </div>
  </a>
</div>`;
}

// Render country details
export async function renderCountryDetails(country) {
  const detailsDiv = document.getElementById('country-details');

  const borderNames = await getBorderCountryNames(country.borders);

  const detailsHTML = `
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}" class="country-flag">
        <h2>${country.name.common}</h2>
        <p><strong>Official Name:</strong> ${country.name.official}</p>
        
        <div class="details-grid">
            <div class="detail-item">
                <span class="detail-label">Population:</span> ${formatPopulation(country.population)}
            </div>
            <div class="detail-item">
                <span class="detail-label">Region:</span> ${country.region}
            </div>
            <div class="detail-item">
                <span class="detail-label">Subregion:</span> ${country.subregion || 'N/A'}
            </div>
            <div class="detail-item">
                <span class="detail-label">Capital:</span> ${formatCapital(country.capital)}
            </div>
            <div class="detail-item">
                <span class="detail-label">Languages:</span> ${country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
            </div>
            <div class="detail-item">
                <span class="detail-label">Currencies:</span> ${
                  country.currencies
                    ? Object.values(country.currencies)
                        .map(c => c.name)
                        .join(', ')
                    : 'N/A'
                }
            </div>
            <div class="detail-item">
            <span class="detail-label">Borders: </span>
            ${
              borderNames.length > 0
                ? borderNames
                    .map(
                      name =>
                        `<a href="./details.html?name=${encodeURIComponent(name)}" class="border-link">${name}</a>`
                    )
                    .join(', ')
                : 'N/A'
            }
            
        </div>
    `;

  detailsDiv.innerHTML = detailsHTML;
}
