import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Confirmation.css"; // Ensure you add styles for the confirmation page

const Confirmation = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { checkinDate, checkoutDate, nights, guests } = state || {};

    const handleBackToHome = () => {
        navigate("/");
    };
    // Format the date string to display in the user-friendly format (e.g., 12/31/2022)
    const formatDate = (dateString) => {
        const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", options);
    };

    return (
        <div className="confirmation-container">
            <h1>Reservation Confirmed!</h1>
            <p>Thank you for booking with us. Here are your reservation details:</p>
            <ul>
                <li>
                    <strong>Check-in:</strong>{" "}
                    {checkinDate ? formatDate(checkinDate) : "N/A"}
                </li>
                <li>
                    <strong>Checkout:</strong>{" "}
                    {checkoutDate ? formatDate(checkoutDate) : "N/A"}
                </li>
                <li>
                    <strong>Nights:</strong> {nights}
                </li>
                <li>
                    <strong>Guests:</strong> {guests}
                </li>
            </ul>
            <button className="back-to-home-btn">
                Print it Out
            </button>
            <button className="back-to-home-btn" onClick={handleBackToHome}>
                Back to Home
            </button>
        </div>
    );
};

export default Confirmation;
