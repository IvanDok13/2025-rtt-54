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
