import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import "./Home.css";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const navigate = useNavigate();

  // Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "https://airbnb-clone-be-l1y1.onrender.com/api/properties"
        );
        setProperties(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Handle filter selection
  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    console.log(`Selected filter: ${filter}`);
  };

  // Handle adding/removing properties from wishlist
  const handleWishlistToggle = (property) => {
    if (wishlist.some((item) => item._id === property._id)) {
      setWishlist(wishlist.filter((item) => item._id !== property._id));
    } else {
      setWishlist([...wishlist, property]);
    }
  };

  // Get filtered properties
  const filteredProperties = selectedFilter
    ? properties.filter((property) => property.category === selectedFilter)
    : properties;

  // Check if property is in wishlist
  const isInWishlist = (propertyId) => {
    return wishlist.some((item) => item._id === propertyId);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header />
      <Filters onFilterSelect={handleFilterSelect} />
      <main className="HomePage">
        <h1 className="HomePage-heading">
          Welcome To Airbnb for Every kind of Trip...
        </h1>
        <div className="property-list">
          {filteredProperties.map((property) => (
            <div
              key={property._id}
              className="property-card"
              onClick={() => navigate(`/properties/${property._id}`)}
            >
              <img src={property.image} alt={property.title} />
              <h2>{property.title}</h2>
              <p>{property.description}</p>
              <p>
                <b>Price:</b> ₹ {property.price} Per Night
              </p>
              <p>
                <b>Location:</b> {property.location}
              </p>
              <button
                className={`wishlist-btn ${
                  isInWishlist(property._id) ? "in-wishlist" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleWishlistToggle(property);
                }}
              >
                {isInWishlist(property._id)
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"}
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
