import React from "react";
import { RestaurantsWrapper } from "../../components/recommended-elements";
import { restaurantsData } from "../../constants";

const RecommendedSection: React.FC = () => {
  return (
    <div className="pl-16 sm:pl-20 md:pl-32 flex flex-col gap-12">
      <h3 className="bold-font text-3xl md:text-4xl xl:text-5xl text-color1 ">
        Recommended Restaurants
      </h3>
      <div className="py-8 grid grid-flow-col gap-8 md:gap-16 overflow-x-auto hidescroll">
        {restaurantsData.map((restaurant) => (
          <>
            <RestaurantsWrapper
              name={restaurant.name}
              imgloc={restaurant.imgloc}
              location={restaurant.location}
              rating={restaurant.rating}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default RecommendedSection;
