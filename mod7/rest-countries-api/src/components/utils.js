// Format population with commas
export function formatPopulation(population) {
  return new Intl.NumberFormat().format(population);
}

// Format capital
export function formatCapital(capital) {
  if (!capital) return 'N/A';
  if (Array.isArray(capital)) {
    return capital.join(', ');
  }
  return capital;
}

// Show countries grid
