import React, { useState } from "react";
import "./Wishlist.css";

const Wishlist = () => {
  // Sample wishlist data; in a real application, this might come from an API or state management
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Cozy Cottage", imageUrl: "https://picsum.photos/200/300" },
    {
      id: 2,
      name: "Modern Apartment",
      imageUrl: "https://picsum.photos/200/300",
    },
    { id: 3, name: "Beach House", imageUrl: "https://picsum.photos/200/300" },
  ]);

  // Handle removing a property from the wishlist
  const handleRemove = (id) => {
    setWishlist(wishlist.filter((property) => property.id !== id));
  };

  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>
      <div className="wishlist-items">
        {wishlist.length > 0 ? (
          wishlist.map((property) => (
            <div key={property.id} className="wishlist-item">
              <img src={property.imageUrl} alt={property.name} />
              <div className="wishlist-item-info">
                <h2>{property.name}</h2>
                <button onClick={() => handleRemove(property.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
