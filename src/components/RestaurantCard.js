import React from "react";
import { RESTAURANT_LOGO_BASE_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const restData = props?.resData?.data?.data;
  const restaurantId = props?.resData?.data?.data?.id;
  console.log(restaurantId);
  const {
    name,
    cuisines,
    avgRating,
    costForTwoString,
    slaString,
    cloudinaryImageId,
  } = restData;
  return (
    <div className="restaurant-card">
      <img
        style={{ width: "100%" }}
        src={RESTAURANT_LOGO_BASE_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      <div className="res-main-details">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
      </div>
      <div className="res-other-details">
        <h4 className="res-rating">{avgRating} stars</h4>
        <h4>{costForTwoString}</h4>
        <h4>{slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
