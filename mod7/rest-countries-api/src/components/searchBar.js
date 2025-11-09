export function setupSearch() {
  const searchHTML = `
        <div class="search-container">
        <input 
          type="text" 
          id="search-input" 
          placeholder="Search countries..." 
        />
        </div>
    `;

  document
    .querySelector('.search-section')
    .insertAdjacentHTML('afterbegin', searchHTML);

  const searchInput = document.getElementById('search-input');
}
