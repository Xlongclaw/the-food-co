import React from "react";
import { ContactStrip } from "../components/hero-elements";
import { FiSearch } from "react-icons/fi";
import { restaurantsData } from "../constants";
import { RestaurantsWrapper } from "../components/recommended-elements";
import { Footer } from "../components";

const Restaurants: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 pr-8 sm:pr-16 md:pr-16 lg:pr-32">
        <div className="flex ">
          <ContactStrip compact />
          <div
            className={`bg-[url('./assets/images/hero8.jpg')] transition-all duration-700 w-full h-[15rem] sm:h-[17rem] md:h-[20rem] lg:h-[20rem] bg-cover bg-center rounded-tl-none rounded-3xl overflow-hidden`}
          >
            <div className="w-full h-full flex items-center justify-center bg-color1/20">
              <h3 className="text-white bold-font text-7xl">Restautrants</h3>
            </div>
          </div>
        </div>
        <div className="flex ml-16 sm:ml-20 md:ml-32 items-center justify-between gap-4">
          <div className="flex gap-4 items-center">
            <input
              type="text"
              className="w-[30rem] border-[1px] border-color1/60 p-3 rounded-3xl"
              placeholder="Search your favourite restaurants"
            />
            <FiSearch size={32} className="text-color1/90" />
          </div>
          <div className="flex gap-8">
            <img className="w-[2rem]" src="images/category.png" alt="" />
            <img className="w-[2rem]" src="images/sort.png" alt="" />
            <img className="w-[2rem]" src="images/menu.png" alt="" />
          </div>
        </div>
        <div className="ml-16 sm:ml-20 md:ml-32">
          <h3 className="text-4xl bold-font pl-5 text-color1">
            Discover Restaurants
          </h3>
          <div className="py-8 pl-5 grid grid-flow-col gap-8 md:gap-16 overflow-x-auto hidescroll">
            {restaurantsData.map((restaurant) => {
              if (restaurant.discover)
                return (
                  <>
                    <RestaurantsWrapper
                      name={restaurant.name}
                      imgloc={restaurant.imgloc}
                      location={restaurant.location}
                      rating={restaurant.rating}
                    />
                  </>
                );
              return <></>;
            })}
          </div>
        </div>
        <div className="ml-16 sm:ml-20 md:ml-32">
          <h3 className="text-4xl pl-5 bold-font text-color1">
            Signature Restaurants
          </h3>
          <div className="py-8 pl-5 grid grid-flow-col gap-8 md:gap-16 overflow-x-auto hidescroll">
            {restaurantsData.map((restaurant) => {
              if (restaurant.discover)
                return (
                  <>
                    <RestaurantsWrapper
                      name={restaurant.name}
                      imgloc={restaurant.imgloc}
                      location={restaurant.location}
                      rating={restaurant.rating}
                    />
                  </>
                );
              return <></>;
            })}
          </div>
        </div>
        <div className="ml-16 sm:ml-20 md:ml-32">
          <h3 className="text-4xl pl-5 bold-font text-color1">Fast Eats</h3>
          <div className="py-8 pl-5 grid grid-flow-col gap-8 md:gap-16 overflow-x-auto hidescroll">
            {restaurantsData.map((restaurant) => {
              if (restaurant.discover)
                return (
                  <>
                    <RestaurantsWrapper
                      name={restaurant.name}
                      imgloc={restaurant.imgloc}
                      location={restaurant.location}
                      rating={restaurant.rating}
                    />
                  </>
                );
              return <></>;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Restaurants;
