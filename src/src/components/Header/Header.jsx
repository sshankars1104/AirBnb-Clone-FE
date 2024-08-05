import React, { useState, useEffect } from "react";
import { FaSearch, FaGlobe, FaBars } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { SiAirbnb } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useGuests } from "../../context/GuestContext";
import "./Header.css";
import DateRange from "../DateRange/DateRange";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [regionDropdownVisible, setRegionDropdownVisible] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const { guests } = useGuests();
  const navigate = useNavigate();

  // State to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token is present in local storage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  const toggleLanguageDropdown = () =>
    setLanguageDropdownVisible(!languageDropdownVisible);
  const toggleRegionDropdown = () =>
    setRegionDropdownVisible(!regionDropdownVisible);
  const toggleDatePicker = () => setDatePickerVisible(!datePickerVisible);

  const handleNavigation = (path) => {
    navigate(path);
    setDropdownVisible(false);
  };

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    // Set authentication status to false
    setIsAuthenticated(false);
    // Redirect to the home page
    navigate("/");
  };

  const handleBackToWishList = () => {
    navigate("/wishlist");
  };

  const regions = [
    "I am flexible",
    "Europe",
    "Thailand",
    "South Asia",
    "United Kingdom",
    "Middle East",
  ];

  return (
    <header className="header">
      <div className="header__left">
        <SiAirbnb className="header__logo" />
        <h1>airbnb</h1>
      </div>
      <div className="header__middle">
        <div className="header__search">
          <span onClick={toggleRegionDropdown}>Anywhere</span>
          {regionDropdownVisible && (
            <div className="regionDropdown">
              <div className="regionDropdown__header">Search by region</div>
              {regions.map((region, index) => (
                <div key={index} className="regionDropdown__item">
                  {region}
                </div>
              ))}
            </div>
          )}
          <span onClick={toggleDatePicker} className="dateRangeTrigger">
            Any week
          </span>
          {datePickerVisible && (
            <div className="datePickerDropdown">
              <DateRange />
            </div>
          )}
          <span>Add guests ({guests})</span>
          <FaSearch className="header__searchIcon" />
        </div>
      </div>
      <div className="header__right">
        <button onClick={handleBackToWishList} className="header__button">
          Airbnb Your WishList
        </button>
        <div className="language">
          <FaGlobe className="header__icon" onClick={toggleLanguageDropdown} />
          {languageDropdownVisible && (
            <div className="languageDropdown">
              <div className="languageDropdown__item">EN</div>
            </div>
          )}
        </div>
        <div className="account">
          <div onClick={toggleDropdown} className="account__main">
            <FaBars className="header__icon" />
            <RiAccountCircleFill />
          </div>
          {dropdownVisible && (
            <div className="dropdown">
              {isAuthenticated ? (
                <>
                  <div className="dropdown__item" onClick={handleLogout}>
                    Logout
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="dropdown__item"
                    onClick={() => handleNavigation("/login")}
                  >
                    Login
                  </div>
                  <div
                    className="dropdown__item"
                    onClick={() => handleNavigation("/signup")}
                  >
                    Signup
                  </div>
                </>
              )}
              <div
                className="dropdown__item"
                onClick={() => handleNavigation("/help")}
              >
                Help Center
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
