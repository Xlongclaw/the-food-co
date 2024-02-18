import React from "react";
import {
  BsClock,
  BsDot,
  BsHeart,
  BsMenuApp,
  BsMenuAppFill,
  BsStar,
  BsStarFill,
  BsThreeDots,
} from "react-icons/bs";
import { FiStar } from "react-icons/fi";

const RestaurantsWrapper: React.FC<{
  name: string;
  imgloc: string;
  location: string;
  rating: number;
}> = (props) => {
  return (
    <div
      className={`${props.imgloc} text-white hover:scale-110 transition-all duration-700  relative
      w-[14rem] h-[20rem] sm:w-[16rem] sm:h-[25rem] md:w-[18rem] md:h-[28rem] lg:w-[22rem]
       lg:h-[32rem] bg-cover rounded-tl-none rounded-3xl flex overflow-hidden flex-col justify-end`}
    >
      <div className="h-[7rem] bg-color1/60 px-8 md:px-6 py-4 flex flex-col justify-center gap-1">
        <div className="flex w-full justify-between items-center text-sm sm:text-base md:text-xl font-extrabold">
          <div>
            <h2 className="">{props.name}</h2>
            <div className="text-sm md:text-sm font-medium md:font-semibold text-white/80">
              {/* locaionico */}
              {props.location}
            </div>
            <div className="flex text-xs gap-0 items-center font-medium mt-2">
              <BsClock size={12} />
              <h3 className="ml-2">25-30 min</h3>
              <BsDot size={20} />
              <h3>2 km </h3>
            </div>
          </div>
          <h2 className=" flex gap-1 text-xs items-center h-[2rem] bg-[#16a034] px-4 rounded-md">
            <BsStarFill />
            {props.rating}
          </h2>
        </div>
      </div>
      <div className="top-0 absolute right-0 p-6 flex gap-4">
        <BsHeart />
        <BsThreeDots />
      </div>
    </div>
  );
};

export default RestaurantsWrapper;
