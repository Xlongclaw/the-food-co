import React from "react";

const HeroText: React.FC = () => {
  return (
    <div className="lg:w-3/5 w-auto flex flex-col gap-3 xl:gap-6">
      <div className="text-sm sm:text-lg xl:text-xl font-semibold italic tracking-wider">
        The most delicious food
      </div>
      <div className="bold-font text-2xl sm:text-4xl xl:text-6xl leading-[2.5rem] sm:leading-[3rem] xl:leading-[5rem]">
        Now order your favourite food before reaching to the restaurant
      </div>
      <div className="text-sm sm:text-lg xl:text-xl">
        Hi! would you like to order food before reaching the restaurant, The
        Food Co. offers you wide variety of options to do this.
      </div>
    </div>
  );
};

export default HeroText;
