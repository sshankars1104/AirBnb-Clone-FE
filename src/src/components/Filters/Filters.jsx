import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import {
  FaTree,
  FaUmbrellaBeach,
  FaMountain,
  FaSwimmingPool,
  FaCampground,
  FaWineBottle,
  FaLandmark,
  FaBuilding,
  FaHotel,
  FaHome,
  FaWater,
} from "react-icons/fa";
import {
  GiTreehouse,
  GiIsland,
  GiCastle,
  GiForestCamp,
  GiBoatPropeller,
  GiCrownCoin,
  GiSandsOfTime,
  GiFountainPen,
} from "react-icons/gi";
import { MdHouseSiding, MdOutlineApartment } from "react-icons/md";
import "./Filters.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Filters({ onFilterSelect }) {
  const categories = [
    { name: "All", icon: null }, // Add "All" category
    { name: "Farms", icon: <MdHouseSiding /> },
    { name: "Amazing View", icon: <FaMountain /> },
    { name: "Amazing Pool", icon: <FaSwimmingPool /> },
    { name: "Island", icon: <GiIsland /> },
    { name: "Vineyards", icon: <FaWineBottle /> },
    { name: "Beach Front", icon: <FaUmbrellaBeach /> },
    { name: "Country Side", icon: <FaCampground /> },
    { name: "OMG!", icon: <GiCastle /> },
    { name: "Treehouses", icon: <GiTreehouse /> },
    { name: "Cabins", icon: <FaHome /> },
    { name: "Rooms", icon: <FaHotel /> },
    { name: "Luxe", icon: <GiCrownCoin /> },
    { name: "Tiny Houses", icon: <FaHome /> },
    { name: "National Parks", icon: <FaTree /> },
    { name: "Historical Homes", icon: <FaLandmark /> },
    { name: "Lake Front", icon: <FaWater /> },
    { name: "Lake", icon: <FaWater /> },
    { name: "Tropical", icon: <GiIsland /> },
    { name: "Castles", icon: <GiCastle /> },
    { name: "A-frame", icon: <FaMountain /> },
    { name: "Trending", icon: <FaBuilding /> },
    { name: "Top Cities", icon: <FaBuilding /> },
    { name: "House Boats", icon: <GiBoatPropeller /> },
    { name: "Camping", icon: <GiForestCamp /> },
    { name: "Mansions", icon: <MdOutlineApartment /> },
    { name: "Domes", icon: <FaLandmark /> },
    { name: "Containers", icon: <GiSandsOfTime /> },
    { name: "New", icon: <GiFountainPen /> },
    { name: "Beach", icon: <FaUmbrellaBeach /> },
    // Add more categories and icons as needed
  ];

  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filter) => {
    if (filter === "All") {
      setActiveFilter(null); // Clear all filters
      onFilterSelect(null); // Show all items
    } else {
      setActiveFilter(filter);
      onFilterSelect(filter); // Pass the selected filter name
    }
  };

  return (
    <div className="filters-carousel">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={false}
        centerMode={true}
        centerSlidePercentage={5}
        emulateTouch={true}
        autoPlay={false}
        preventMovementUntilSwipeScrollTolerance={true}
        renderIndicator={() => null}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className={`filter-item ${
              activeFilter === category.name ||
              (!activeFilter && category.name === "All")
                ? "active"
                : ""
            }`}
            onClick={() => handleFilterClick(category.name)}
          >
            {category.icon && category.icon}
            <h5>{category.name}</h5>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Filters;
