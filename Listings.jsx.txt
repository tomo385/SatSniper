import React, { useEffect, useState } from "react";
import { fetchRareSatsListings } from "./utils/fetchListings.js";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRareSatsListings()
      .then(setListings)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-white p-4">Loading Magic Eden listings...</div>;

  return (
    <div className="grid gap-4 p-4">
      {listings.map((listing) => (
        <a
          key={listing.id}
          href={`https://magiceden.io/item-details/${listing.inscriptionId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 p-4 rounded-2xl shadow hover:bg-gray-800 transition"
        >
          <div className="text-white text-lg font-semibold">
            {listing.satRanges?.[0]?.start} – {listing.satRanges?.[0]?.end}
          </div>
          <div className="text-sm text-gray-400">Block: {listing.blockHeight}</div>
          <div className="text-sm text-gray-400">
            Price: {(listing.price / 1e8).toFixed(6)} BTC
          </div>
        </a>
      ))}
    </div>
  );
};

export default Listings;
