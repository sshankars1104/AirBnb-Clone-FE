import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGuests } from "../../context/GuestContext"; // Import the context
import "./PropertyDetail.css";

const PropertyDetail = () => {
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [nights, setNights] = useState(0);
  const { guests, setGuests } = useGuests(); // Use the context
  const [minDate, setMinDate] = useState("");

  const pricePerNight = 3500.0;
  const cleaningFee = 375;
  const serviceFee = 279;

  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const calculateNights = (checkin, checkout) => {
    if (checkin && checkout) {
      const checkinDate = new Date(checkin);
      const checkoutDate = new Date(checkout);
      const timeDiff = checkoutDate - checkinDate;
      const daysDiff = timeDiff / (1000 * 3600 * 24);
      return daysDiff;
    }
    return 0;
  };

  const handleCheckinChange = (e) => {
    const newCheckinDate = e.target.value;
    setCheckinDate(newCheckinDate);
    const calculatedNights = calculateNights(newCheckinDate, checkoutDate);
    setNights(calculatedNights);
  };

  const handleCheckoutChange = (e) => {
    const newCheckoutDate = e.target.value;
    setCheckoutDate(newCheckoutDate);
    const calculatedNights = calculateNights(checkinDate, newCheckoutDate);
    setNights(calculatedNights);
  };

  const handleGuestsChange = (e) => {
    setGuests(parseInt(e.target.value, 10));
  };

  const handleReserve = () => {
    navigate("/confirmation", {
      state: { checkinDate, checkoutDate, nights, guests },
    });
  };

  const totalBeforeTaxes = pricePerNight * nights;
  const total = totalBeforeTaxes + cleaningFee + serviceFee;

  return (
    <div className="property-detail-container">
      <div className="property-detail-content">
        <div className="image-card">
          <img src="https://picsum.photos/800/600" alt="Property" />
        </div>
        <div className="booking-details-card">
          <h1>₹{pricePerNight} per night</h1>
          <p>
            ₹{pricePerNight} x {nights} night{nights > 1 ? "s" : ""}
          </p>

          <label htmlFor="checkin">Check-in</label>
          <input
            type="date"
            id="checkin"
            value={checkinDate}
            onChange={handleCheckinChange}
            min={minDate}
          />

          <label htmlFor="checkout">Checkout</label>
          <input
            type="date"
            id="checkout"
            value={checkoutDate}
            onChange={handleCheckoutChange}
            min={minDate}
          />

          <label htmlFor="guests">Guests</label>
          <select id="guests" value={guests} onChange={handleGuestsChange}>
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num + 1}>
                {num + 1} guest{num > 0 ? "s" : ""}
              </option>
            ))}
          </select>

          <button className="reserve-btn" onClick={handleReserve}>
            Reserve
          </button>

          <div className="price-breakdown">
            <p>
              <span>
                ₹{pricePerNight} x {nights} night{nights > 1 ? "s" : ""}
              </span>
              <span>₹{pricePerNight * nights}</span>
            </p>
            <p>
              <span>Cleaning fee:</span>
              <span>₹{cleaningFee}</span>
            </p>
            <p>
              <span>Airbnb service fee:</span>
              <span>₹{serviceFee}</span>
            </p>
            <p>
              <span>Total before taxes:</span>
              <span>₹{totalBeforeTaxes}</span>
            </p>
            <p className="total">
              <span>Total:</span>
              <span>₹{total}</span>
            </p>
            <p>
              <span>Guests:</span>
              <span>{guests}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
