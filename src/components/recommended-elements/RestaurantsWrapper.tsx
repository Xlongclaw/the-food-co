import React from "react";
import { FiStar } from "react-icons/fi";

const RestaurantsWrapper: React.FC<{name:string;imgloc:string;location:string;rating:number}> = (props) => {
  return (
    <div
      className={`${props.imgloc} text-white hover:scale-110 transition-all duration-700 w-[14rem] h-[20rem] sm:w-[16rem] sm:h-[25rem] md:w-[18rem] md:h-[28rem] lg:w-[22rem] lg:h-[32rem] bg-cover rounded-tl-none rounded-3xl flex overflow-hidden flex-col justify-end`}
    >
      <div className="h-[7rem] bg-color1/60 px-8 md:px-12 py-4 flex flex-col justify-center gap-1">
        <div className="flex w-full justify-between text-sm sm:text-base md:text-xl font-extrabold">
          <h2 className="">{props.name}</h2>
          <h2 className=" flex gap-2 items-center">
            <FiStar />
            {props.rating}
          </h2>
        </div>
        <div className="text-sm md:text-base font-medium md:font-semibold">
          {/* locaionico */}
          {props.location}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsWrapper;
