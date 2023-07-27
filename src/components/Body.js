import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setRestaurantData(json?.data?.cards);
    setFilteredRestaurant(json?.data?.cards);
  };

  const handleTopRatedRestaurants = () => {
    const filteredResList = restaurantData.filter(
      (data) => data?.data?.data?.avgRating > 4
    );
    setFilteredRestaurant(filteredResList);
  };

  // Conditional rendering
  //   if (restaurantData?.length === 0) {
  //     return <Shimmer />;
  //   }

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchQuery(newValue);
  };

  const handleSearch = () => {
    const filteredData = restaurantData.filter((data) =>
      data?.data?.data?.name?.toLowerCase()?.includes(searchQuery.toLowerCase())
    );
    setFilteredRestaurant(filteredData);
  };

  const handleRestaurantClick = (id) => {};

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like you're offline. Please check your internet connecttion.</h1>

  return restaurantData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            type="text"
            placeholder=""
            className="search-box"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant?.length === 0
          ? "No Restaurant Found"
          : filteredRestaurant?.map((data) => {
              return (
                <Link
                  to={`/restaurants/${data?.data?.data?.id}`}
                  key={data?.data?.data?.id}
                  className="rest-link"
                >
                  <RestaurantCard resData={data} />
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Body;
