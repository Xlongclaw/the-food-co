import React from "react";
import { RestaurantsWrapper } from "../../components/recommended-elements";
import { restaurantsData } from "../../constants";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const RecommendedSection: React.FC = () => {
  return (
    <div className="pl-16 sm:pl-20 md:pl-32 flex flex-col relative">
      <div className="flex justify-between mr-10 items-center">
        <div>
          <h3 className="bold-font text-3xl md:text-4xl xl:text-5xl text-color1 ">
            Recommended Restaurants
          </h3>
          <h4 className=" font-semibold text-xl text-color1/80 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            voluptatum?
          </h4>
        </div>
        <div className="flex text-xl gap-4 items-center font-semibold">
          <h1 className="hover:underline cursor-pointer">See more</h1>
          <BsArrowRight size={30} />
        </div>
      </div>
      <div className="py-8 grid grid-flow-col gap-8 md:gap-8 overflow-x-auto hidescroll pb-8">
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
      <div className="flex gap-6 justify-end mr-16 mt-8">
        {" "}
        <BsArrowLeft
          className="bg-white border-2 border-color1 p-6 text-color1 rounded-2xl"
          size={80}
        />{" "}
        <BsArrowRight
          className="p-6 bg-color1 text-white rounded-2xl"
          size={80}
        />{" "}
      </div>
    </div>
  );
};

export default RecommendedSection;
