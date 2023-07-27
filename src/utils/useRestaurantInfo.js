import { useEffect, useState } from "react";
import { VIEW_RESTAURANT } from "./constant";

const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(VIEW_RESTAURANT + resId);
    const json = await response.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantInfo;
