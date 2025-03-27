export async function fetchRareSatsListings() {
  const res = await fetch("/.netlify/functions/fetch-listings");
  if (!res.ok) throw new Error("Failed to fetch Rare Sats listings.");
  const data = await res.json();
  return data;
}
