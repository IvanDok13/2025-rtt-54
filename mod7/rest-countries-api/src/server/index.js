export async function fetchData() {
  try {
    const res = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,language,currency,subregion'
    );

    if (!res.ok) {
      throw new Error('Error fetching data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
