export const loadNumber = (key: string, fallback: number) => {
  const saved = localStorage.getItem(key);
  return saved !== null ? Number(saved) : fallback;
};

export const loadArray = (key: string) => {
  const saved = localStorage.getItem(key);
  if (!saved) return [];
  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
};
