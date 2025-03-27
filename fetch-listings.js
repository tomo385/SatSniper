export default async (req, context) => {
  const proxyURL = `https://corsproxy.io/?` +
    encodeURIComponent("https://api-mainnet.magiceden.io/ordinals/marketplace/rare_sats?limit=50");

  const res = await fetch(proxyURL);
  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch listings" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const data = await res.json();
  return new Response(JSON.stringify(data?.results || []), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
