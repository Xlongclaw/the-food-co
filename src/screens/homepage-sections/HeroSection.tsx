import React from "react";
import { ContactStrip, HeroText } from "../../components/hero-elements";

const HeroSection: React.FC = () => {
  return (
    <div className="flex pr-8 sm:pr-16 md:pr-16 lg:pr-32">
      <ContactStrip />
      <div
        className={`bg-[url('./assets/images/hero7.jpg')] w-full h-[60rem] sm:h-[65rem] md:h-[65rem] lg:h-[55rem] bg-cover bg-center rounded-tl-none rounded-3xl overflow-hidden`}
      >
        <div className="w-full h-full bg-black/40 flex justify-center items-center">
          <div className="flex lg:flex-row flex-col text-white px-[7vw] sm:px-24 justify-center gap-24 lg:gap-10 items-center">
            <HeroText />
            <div className="bg-white/40 opacity-0 h-[25rem] w-[80%] lg:w-2/5 rounded-3xl p-4">
              <h3 className="text-center text-color1 font-bold text-2xl">
                Reservation
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
