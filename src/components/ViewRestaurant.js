import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import useOnlineStatus from "../utils/useOnlineStatus";

const ViewRestaurant = () => {
  const { restaurantId } = useParams();
  const restaurantData = useRestaurantInfo(restaurantId);

  const { name, costForTwoMessage, cuisines } =
    restaurantData?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  return restaurantData === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <div>
        <h2>Menu</h2>
        <ul>
          {itemCards?.map((item) => {
            return (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} - Rs.{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ViewRestaurant;
